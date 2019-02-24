import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource, MatRadioChange } from '@angular/material';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
import { HttpResponse, HttpEventType } from '@angular/common/http';

// Must import to use Forms functionality  
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { TransactionsService } from '../../../_services/transactions.service';
import { ContactsService } from '../../../_services/contacts.service';
import { CommonService } from '../../../_services/common.service';
import { DropDown } from '../../../_models/common/dropdown';
import { AuthenticationService } from '../../../_services/authentication.service';
import { UploadFileService } from '../../../_services/upload-file.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-receivables-create',
  templateUrl: './receivables-create.component.html',
  styleUrls: ['./receivables-create.component.css']
})
export class ReceivablesCreateComponent implements OnInit {


  bills: any = [];
  payments: any = [];

  transaction: any;
  documents: any;
  files: any = [];
  //declarations
  userDetails: {};
  vendors = [];
  customers = [];
  productTypes: DropDown[];

  persons = [];
  contactList = [];
  personDetails = {};

  invoiceObject = {};
  showInvoice: boolean = false;
  organisationAccounts = [];
  transactionNumber: String;

  filesToUpload = [];
  selectedFiles: FileList;
  progress: { percentage: number } = { percentage: 0 };

  receivablesForm = this.fb.group({
    contact: this.fb.group({
      isCompany: [''],
      id: ['', Validators.required],
    }),
    transaction_number: [''],
    lineItems: this.fb.array([]),
    paymentAmount: [''],
    creationdate: ['', Validators.required],
    additionalComments: [],
    transactionType: this.fb.group({
      "id": 10,
      "name": "Receivables"
    }),
    transactionStatus: this.fb.group({
      "id": 2,
      "value": "IN-PROGRESS"
    }),
    bills: this.fb.group({
      billNumber: ['', Validators.required],
      bill_issued_date: ['', Validators.required],
      amount: ['', Validators.required],
      payments: this.fb.group({
        amount: ['', Validators.required],
        paymentDate: ['', Validators.required],
        isNew: true,
        isActive: true,
        accounts: this.fb.group({
          id: ['', Validators.required],
        }),
      }),
    }),
    user_id: 0,
    user_name: '',
    departmentId: 0,
    departmentName: ''
  });

  constructor(private fb: FormBuilder,
    private transactionsService: TransactionsService, private currencyPipe: CurrencyPipe,
    private datePipe: DatePipe,
    private contactsService: ContactsService,
    private commonService: CommonService,
    private authenticationService: AuthenticationService,
    private uploadFileService: UploadFileService,
    private toastr: ToastrService,
    private router: Router,
    private keycloakAngular: KeycloakService) {
    //this.salesForm = this.createSaleForm(fb);    
  }

  async ngOnInit() {
    //get logged in user details from local storage 
    // and set userId, userName, DepartmentId and DepartmentName
    if (await this.keycloakAngular.isLoggedIn()) {
      this.userDetails = await this.keycloakAngular.loadUserProfile();
    }
    console.log(this.userDetails);
    if (this.userDetails != null) {
      this.receivablesForm.controls["user_id"].setValue(
        this.userDetails["attributes"]['userId'][0]
      );
      this.receivablesForm.controls["user_name"].setValue(
        this.userDetails['username']
      );
      this.receivablesForm.controls["departmentId"].setValue(
        this.userDetails["attributes"]['departmentId'][0]
      );
      this.receivablesForm.controls["departmentName"].setValue(
        this.userDetails["attributes"]['departmentName'][0]
      );
    } else {
      return this.router.navigate(['/login'])
    }

    // initialize stream on products
    const myFormValueChanges$ = this.receivablesForm.controls['lineItems'].valueChanges;

    // load dropdowns
    this.getContactList();
    //this.getCustomerList();
    this.getProductTypes();
    this.getAccounts();
    this.addProductInfoForms()
  }


  ngAfterViewInit() {
  }



  get productInfoForms() {
    return this.receivablesForm.get('lineItems') as FormArray;
  }

  addProductInfoForms() {
    this.productInfoForms.push(this.getProduct());
  }
  addNewProduct() {
    const control = <FormArray>this.receivablesForm.controls['lineItems'];
    control.push(this.getProduct());
  }



  displayInvoice(val) {
    this.showInvoice = val;
  }

  toggleOnBack() {
    this.resetForm();
    this.showInvoice = false;
  }


  // Executed When Form Is Submitted  
  onFormSubmit(form: any) {
    if (this.receivablesForm.valid) {
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
        this.executeExpenseCreation(form);
      }
    });
  }

  }

  executeExpenseCreation(form: any) {
    console.log("FORM DATA");
    this.payments.push(form.bills.payments);
    form.bills.payments = this.payments;
    this.bills.push(form.bills);
    form.bills = this.bills;

    form.paymentAmount = form.lineItems[0].amount;
    form.bills[0].payments[0].amount = form.paymentAmount;
    form.bills[0].amount = form.paymentAmount;
    console.log("Receivable Form Submitted");
    //console.log(this.transaction);

    console.log(JSON.stringify(form));

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
    console.log(form);
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
              this.toastr.info('Receivable saved successfully ', 'Success', {
                timeOut: 3000,
                progressBar: true
              });
            }
          });
        } else {
          this.displayInvoice(true);
          this.toastr.info('Receivable saved successfully ', 'Success', {
            timeOut: 3000,
            progressBar: true
          });
        }

      }
    );
  }

  resetForm() {
    this.receivablesForm.reset();
    //reset person details
    this.personDetails = {};
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    Array.from(this.selectedFiles).forEach(sf => {
      console.log(sf.name);
    });
  }


  /******************************* PRIVATE AREA ***********************************************************/


  /**
   * Create form product
   */
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



  private getContactList() {//load on init
    this.contactsService.getContactList().subscribe(
      data => {
        this.contactList = data;
        this.contactList.forEach(contact => {
          if (contact.isCompany == true) {
            this.vendors.push(contact);
          } else {
            this.customers.push(contact);
          }
        });

      }
    );
  }

  private getProductTypes() {//load on init
    this.commonService.getProductTypes().subscribe(
      data => {
        this.productTypes = data;
      }
    );
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

  private filterForDisplay(filterArray, value) {
    filterArray.forEach(contact => {
      if (contact.id == value) {
        console.log(JSON.stringify(contact));
        this.personDetails = contact;
      }
    });
  }

}
