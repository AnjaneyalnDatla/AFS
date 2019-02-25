import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTableModule } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormArray, FormControl, Form } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ContactsService } from '../../../_services/contacts.service';
import { CommonService } from '../../../_services/common.service';
import { DropDown } from '../../../_models/common/dropdown';
import { TransactionsService } from '../../../_services/transactions.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { UploadFileService } from '../../../_services/upload-file.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { KeycloakService } from 'keycloak-angular';
import { ServiceUtil } from '../../../_helpers/serviceutil';

@Component({
  selector: 'app-purchases-create',
  templateUrl: './purchases-create.component.html',
  styleUrls: ['./purchases-create.component.css']
})
export class PurchasesCreateComponent implements OnInit {

  
  constructor(private fb: FormBuilder,
    private transactionsService: TransactionsService,
    private uploadFileService: UploadFileService,
    private currencyPipe: CurrencyPipe,
    private datePipe: DatePipe, private router: Router,
    private contactsService: ContactsService,
    private toastr: ToastrService,
    private commonService: CommonService, 
    private authenticationService: AuthenticationService,
    private keycloakAngular: KeycloakService,
    private serviceUtil: ServiceUtil
  ) { }

  transaction: {};
  files: any = [];
  selectedFiles: FileList;
  progress: { percentage: number } = { percentage: 0 };

  product: { name: '', type: '', price: '', quantity: 0, total: 0 };

  //declarations
  userDetails: {};
  vendors = [];
  customers = [];
  productTypes: DropDown[];
  productObj = {};
  persons = [];
  contactList = [];
  personDetails = {};

  totalSum: number = 0;
  subTotal: number = 0;
  taxValue: number = 0;
  invoiceObject = {};
  transactionNumber: String;
  isActive: boolean = true;
  showInvoice: boolean = false;
  organisationAccounts = [];

  purchaseForm = this.fb.group({
    contact: this.fb.group({
      id: ['', Validators.required],
    }),
    lineItems: this.fb.array([]),
    tax: ['', Validators.required],
    shipping: [''],
    other: [''],
    paymentAmount: [''],
    creationdate: ['', Validators.required],
    dueDate: [''],
    deliveryDate: [''],
    additionalComments: [],
    subTotal: [{ value: '', disabled: true }],
    productsTotal: [{ value: '', disabled: true }],
    transactionType: this.fb.group({
      "id": 7,
      "name": "Purchase Order"
    }),
    transactionStatus: this.fb.group({
      "id": 2,
      "value": "IN-PROGRESS"
    }),
    user_id: 0,
    user_name: '',
    departmentId: 0,
    departmentName: '',
    organisation: this.fb.group({
      name: this.serviceUtil.getGroupName(),
      code: this.serviceUtil.getGroupCode()
    })
  });


  async ngOnInit() {

    //get logged in user details from local storage 
    // and set userId, userName, DepartmentId and DepartmentName
    if (await this.keycloakAngular.isLoggedIn()) {
      this.userDetails = await this.keycloakAngular.loadUserProfile();
    }
    console.log(this.userDetails);
    if (this.userDetails != null) {
      this.purchaseForm.controls["user_id"].setValue(
        this.userDetails["attributes"]['userId'][0]
      );
      this.purchaseForm.controls["user_name"].setValue(
        this.userDetails['username']
      );
      this.purchaseForm.controls["departmentId"].setValue(
        this.userDetails["attributes"]['departmentId'][0]
      );
      this.purchaseForm.controls["departmentName"].setValue(
        this.userDetails["attributes"]['departmentName'][0]
      );
    } else {
      return this.router.navigate(['/login'])
    }

    // initialize stream on products
    const myFormValueChanges$ = this.purchaseForm.controls['lineItems'].valueChanges;
    // subscribe to the stream so listen to changes on products
    myFormValueChanges$.subscribe(products => this.updateTotalUnitPrice(products));

    // initialize stream on tax
    const myTaxValueChanges$ = this.purchaseForm.get('tax').valueChanges;
    // subscribe to the stream so listen to changes on tax
    myTaxValueChanges$.subscribe(tax => this.updateTotalTaxPrice(tax));


    /** Updating the purchasefrom and delivery to drop downs */
    this.getContactList();
    this.getProductTypes();
    this.getAccounts();

  }
  ngAfterViewInit() { }


  get productInfoForms() {
    return this.purchaseForm.get('lineItems') as FormArray;
  }

  addProductInfoForms() {
    this.productInfoForms.push(this.getProduct());
  }
  addNewProduct() {
    const control = <FormArray>this.purchaseForm.controls['lineItems'];
    control.push(this.getProduct());
  }


  displayPersonDetails(value) {
    this.filterForDisplay(this.contactList, value);
  }

  displayInvoice(val) {
    this.showInvoice = val;
  }

  // Executed When Form Is Submitted  
  onFormSubmit(form: any) {
    if (this.purchaseForm.valid) {
      swal({
        title: 'Wish to continue?',
        text: "Once confirmed, the action is irreversible",
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Save',
        buttonsStyling: false
      }).then((result) => {
        if (result.value) {
          this.executePurchaseCreation(form);
        }
      })
    }
  }

  executePurchaseCreation(form: any) {
    console.log("FORM DATA");
    form.paymentAmount = this.totalSum;
    if (this.selectedFiles != undefined && this.selectedFiles.length > 0) {
      Array.from(this.selectedFiles).forEach(sf => {
        var file: any = {};
        file.documentReferencerNumber = this.transactionNumber;
        file.documentName = sf.name;
        this.files.push(file);
      });
    }
    form.documents = this.files;
    console.log("Form with documents");

    console.log(JSON.stringify(form));
    this.transactionsService.saveTransaction(form).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.transactionNumber = data.transaction_number;
        if (this.selectedFiles != undefined && this.selectedFiles.length > 0) {
          this.uploadFileService.pushFileToStorage(this.selectedFiles, this.transactionNumber).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress.percentage = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.displayInvoice(true);
              console.log('File is completely uploaded!');
              this.toastr.info('Purchase saved successfully ', 'Success', {
                timeOut: 3000,
                progressBar: true
              });
            }
          });
        } else {
          this.displayInvoice(true);
          this.toastr.info('Purchase saved successfully ', 'Success', {
            timeOut: 3000,
            progressBar: true
          });
        }
      }
    );
    // this.displayInvoice(true);
  }

  resetForm() {
    this.purchaseForm.reset();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    Array.from(this.selectedFiles).forEach(sf => {
      console.log(sf.name);
    });
  }

  /******************************* PRIVATE AREA ***********************************************************/
  /** Adding FormArray Elements */
  private getProduct() {
    const numberPatern = '^[0-9.,]+$';
    return this.fb.group({
      line_item_no: this.productInfoForms.length + 1,  //set line_item_no with the index number
      name: ['', Validators.required],
      products: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.pattern(numberPatern)]],
      price: ['', [Validators.required, Validators.pattern(numberPatern)]],
      amount: [''],
      amountCurr: [{ value: '', disabled: true }]
    });
  }

  /** Reference Data contactlist*/
  private getContactList() {//load on init
    this.contactsService.getContactList().subscribe(
      data => {
        this.contactList = data;
        console.log(data);
      }
    );
  }

  private getProductTypes() {//load on init
    this.commonService.getProductTypes().subscribe(
      data => {
        this.productTypes = data;
        console.log(data);
      }
    );
  }

  /**
   * Update prices as soon as something changed on product info group
   */
  private updateTotalUnitPrice(products: any) {
    // get our products group controll
    const control = <FormArray>this.purchaseForm.controls['lineItems'];
    // before recount total price need to be reset. 
    this.totalSum = 0;
    this.subTotal = 0;
    this.taxValue = this.getTax();
    for (let i in products) {
      let totalUnitPrice = (products[i].quantity * products[i].price);
      // now format total price with angular currency pipe
      let totalUnitPriceFormatted = this.currencyPipe.transform(totalUnitPrice, 'INR', 'symbol-narrow', '1.2-2');
      // update total sum field on unit and do not emit event myFormValueChanges$ in this case on products
      control.at(+i).get('amountCurr').setValue(totalUnitPriceFormatted, { onlySelf: true, emitEvent: false });
      control.at(+i).get('amount').setValue(totalUnitPrice, { onlySelf: true, emitEvent: false });
      // update total price for all products
      this.subTotal += totalUnitPrice;
    }
    this.totalSum = this.subTotal + this.taxValue;
  }

  /**
   * Update total price as soon as tax changed 
   */
  private updateTotalTaxPrice(tax: number) {
    // now format tax price with angular currency pipe
    let taxPriceFormatted = this.currencyPipe.transform(tax, 'INR', 'symbol-narrow', '1.2-2');

    this.totalSum = this.subTotal + tax;
  }

  private getTax() {
    return this.purchaseForm.get('tax').value;
  }

  private filterForDisplay(filterArray, value) {
    filterArray.forEach(contact => {
      if (contact.id == value) {
        console.log(JSON.stringify(contact));
        this.personDetails = contact;
      }
    });
  }

  private getAccounts() {//load on init
    //OrganisationAccounts do not have contact ID. this needs to be refactored
    this.commonService.getAccounts().subscribe(
      data => {
        this.organisationAccounts = data;
        console.log("Accounts");
        console.log(JSON.stringify(this.organisationAccounts));
      }
    );
  }

}
