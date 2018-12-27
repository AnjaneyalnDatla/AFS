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
import { Router } from '@angular/router';


export interface Vendor {
  value: string;
  viewValue: string;
}

export interface Accounts {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ACCOUNTS: Accounts[] = [
  { value: 'cash', viewValue: 'Cash' },
  { value: 'HDFC Checkings', viewValue: 'HDFC CHECKINGS' },
  { value: 'AXIS Checkings', viewValue: 'AXIS CHECKINGS' }
];


@Component({
  selector: 'app-purchases-create',
  templateUrl: './purchases-create.component.html',
  styleUrls: ['./purchases-create.component.css']
})
export class PurchasesCreateComponent implements OnInit {

  tableHeaders: string[] = ['type', 'name', 'pricePerUnit', 'quantity', 'total'];
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  columns = [
    { columnDef: 'position', header: 'Position',    cell: (element: any) => `${element.position}` },
    { columnDef: 'name',     header: 'Name',   cell: (element: any) => `${element.name}`     },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);

  product: { name: '', type: '', price: '', quantity: 0, total: 0 };

  dataSource = new MatTableDataSource<PeriodicElement>();
  
  accounts = ACCOUNTS;

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
  editInvoiceObject = {};
  personType: string = '';
  personTypeValue: string = '';
  isActive: boolean = true;
  showInvoice: boolean = false;
  viewInvoice: boolean = false;
  organisationAccounts = [];

  purchaseForm = this.fb.group({
    purchaseFrom: ['', Validators.required],
    purchaseDt: ['', Validators.required],
    deliveryTo: ['', Validators.required],
    deliveryDt: ['', Validators.required],
    debitFrom: ['', Validators.required],
    personType: ['', Validators.required],
    personTypeValue: ['', Validators.required],
    lineItems: this.fb.array([]),
    tax: ['', Validators.required],
    paymentAmount: ['', Validators.required],
    paymentDate: ['', Validators.required],
    creditTo: ['', Validators.required],
    additionalComments: [],
    subTotal: [{ value: '', disabled: true }],
    productsTotal: [{ value: '', disabled: true }],
    accounts: [{ id: 1 }],
    user_id: 0,
    user_name: '',
    departmentId: 0,
    departmentName: ''
  });

  constructor(private fb: FormBuilder,
    private transactionsService: TransactionsService, private currencyPipe: CurrencyPipe,
    private datePipe: DatePipe, private router: Router,
    private contactsService: ContactsService,
    private commonService: CommonService,private authenticationService: AuthenticationService) { }

  ngOnInit() {
    
    //get logged in user details from local storage 
    // and set userId, userName, DepartmentId and DepartmentName
    this.userDetails = this.authenticationService.getLoginUser();
    if (this.userDetails != null) {
      this.purchaseForm.controls["user_id"].setValue(
        this.userDetails['id']
      );
      this.purchaseForm.controls["user_name"].setValue(
        this.userDetails['userName']
      );
      this.purchaseForm.controls["departmentId"].setValue(
        this.userDetails['person']['department']['id']
      );
      this.purchaseForm.controls["departmentName"].setValue(
        this.userDetails['person']['department']['name']
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

  onFormSubmit(form: NgForm) {
    console.log(form);
  }

  resetForm() {
    this.purchaseForm.reset();
  }


  /******************************* PRIVATE AREA ***********************************************************/
  /** Adding FormArray Elements */
  private getProduct() {
    const numberPatern = '^[0-9.,]+$';
    return this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      pricePerUnit: ['', [Validators.required, Validators.pattern(numberPatern)]],
      quantity: ['', [Validators.required, Validators.pattern(numberPatern)]],
      total: [{ value: '', disabled: true }]
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

  private getProductTypes(){//load on init
    this.commonService.getProductTypes().subscribe(
      data => {
        this.productTypes  =  data;
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
    return this.purchaseForm.get('tax').value;
  }

}
