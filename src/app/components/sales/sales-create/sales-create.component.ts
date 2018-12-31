import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource, MatRadioChange } from '@angular/material';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';

// Must import to use Forms functionality  
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { TransactionsService } from '../../../_services/transactions.service';
import { ContactsService } from '../../../_services/contacts.service';
import { CommonService } from '../../../_services/common.service';
import { DropDown } from '../../../_models/common/dropdown';
import { PeriodicElement } from '../../../_models/common/periodicelement';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-sales-create',
  templateUrl: './sales-create.component.html',
  styleUrls: ['./sales-create.component.css']
})
export class SalesCreateComponent implements OnInit {


  transaction: {};

  //declarations
  userDetails: {};
  vendors = [];
  customers = [];
  productTypes: DropDown[];

  persons = [];
  contactList = [];
  personDetails = {};

  totalSum: number = 0;
  subTotal: number = 0;
  taxValue: number = 0;
  invoiceObject = {};
  showInvoice: boolean = false;
  organisationAccounts = [];
  transactionNumber: String;



  salesForm = this.fb.group({
    contact: this.fb.group({
      isCompany: ['', Validators.required],
      id: ['', Validators.required],
    }),
    transaction_number: ['', Validators.required],
    lineItems: this.fb.array([]),
    tax: ['', Validators.required],
    shipping: ['', Validators.required],
    other: ['', Validators.required],
    paymentAmount: ['', Validators.required],
    creationdate: ['', Validators.required],
    dueDate: ['', Validators.required],
    deliveryDate: ['', Validators.required],
    additionalComments: [],
    subTotal: [{ value: '', disabled: true }],
    productsTotal: [{ value: '', disabled: true }],
    transactionType: this.fb.group({
      "id": 1,
    }),
    transactionStatus: this.fb.group({
      "id": 2,
      "value": "IN-PROGRESS"
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
    private router: Router) {
    //this.salesForm = this.createSaleForm(fb);    
  }

  ngOnInit() {
    //get logged in user details from local storage 
    // and set userId, userName, DepartmentId and DepartmentName
    this.userDetails = this.authenticationService.getLoginUser();

    console.log(this.userDetails);
    if (this.userDetails != null) {
      this.salesForm.controls["user_id"].setValue(
        this.userDetails['id']
      );
      this.salesForm.controls["user_name"].setValue(
        this.userDetails['userName']
      );
      this.salesForm.controls["departmentId"].setValue(
        this.userDetails['person']['department']['id']
      );
      this.salesForm.controls["departmentName"].setValue(
        this.userDetails['person']['department']['name']
      );
    } else {
      return this.router.navigate(['/login'])
    }

    // initialize stream on products
    const myFormValueChanges$ = this.salesForm.controls['lineItems'].valueChanges;
    // subscribe to the stream so listen to changes on products
    myFormValueChanges$.subscribe(products => this.updateTotalUnitPrice(products));

    // initialize stream on tax
    const myTaxValueChanges$ = this.salesForm.get('tax').valueChanges;
    // subscribe to the stream so listen to changes on tax
    myTaxValueChanges$.subscribe(tax => this.updateTotalTaxPrice(tax));

    // load dropdowns
    this.getContactList();
    //this.getCustomerList();
    this.getProductTypes();
    this.getAccounts();
  }


  ngAfterViewInit() {
  }



  get productInfoForms() {
    return this.salesForm.get('lineItems') as FormArray;
  }

  addProductInfoForms() {
    this.productInfoForms.push(this.getProduct());
  }
  addNewProduct() {
    const control = <FormArray>this.salesForm.controls['lineItems'];
    control.push(this.getProduct());
  }

  toggleData($event: MatRadioChange) {
    if ($event.value === 'true') {
      this.persons = this.vendors;
    } else {
      this.persons = this.customers;
    }
  }

  displayPersonDetails(value, personType) {
    if (personType.value == 'true') {
      this.filterForDisplay(this.vendors, value);
    } else {
      this.filterForDisplay(this.customers, value);
    }

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
        console.log("FORM DATA");
        form.paymentAmount = this.totalSum;
        console.log(JSON.stringify(form));
        this.transactionsService.saveTransaction(form).subscribe(
          data => {
            console.log(JSON.stringify(data));
            this.transactionNumber = data.transaction_number;
            this.displayInvoice(true);
          }
        );
        // this.displayInvoice(true);
      }
    })
  }

  resetForm() {
    this.salesForm.reset();
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

  /**
   * Update prices as soon as something changed on product info group
   */
  private updateTotalUnitPrice(products: any) {
    // get our products group controll
    const control = <FormArray>this.salesForm.controls['lineItems'];
    // before recount total price need to be reset. 
    this.totalSum = 0;
    this.subTotal = 0;
    this.taxValue = this.getTax();
    for (let i in products) {
      let totalUnitPrice = (products[i].quantity * products[i].price);
      // now format total price with angular currency pipe
      let totalUnitPriceFormatted = this.currencyPipe.transform(totalUnitPrice, 'USD', 'symbol-narrow', '1.2-2');
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
    let taxPriceFormatted = this.currencyPipe.transform(tax, 'USD', 'symbol-narrow', '1.2-2');

    this.totalSum = this.subTotal + tax;
  }

  private getTax() {
    return this.salesForm.get('tax').value;
  }


  private removeProduct(index) {
    const control = <FormArray>this.salesForm.controls['lineItems'];
    if (control.length > 1)
      control.removeAt(index);
    else
      alert("Unable to delete. There should be atleast one product to create a sale.")
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
