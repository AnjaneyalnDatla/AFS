import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource, MatRadioChange } from '@angular/material';
import { CurrencyPipe } from '@angular/common';
// Must import to use Forms functionality  
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { TransactionsService } from '../../_services/transactions.service';
import { ContactsService } from '../../_services/contacts.service';
import { CommonService } from '../../_services/common.service';
import { DropDown } from '../../_models/common/dropdown';
import { PeriodicElement } from '../../_models/common/periodicelement';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  // Table columns 
  columns = [
    { columnDef: 'transaction_number', header: 'Transaction No.', cell: (element: any) => `${element.transaction_number}` },
    { columnDef: 'departmentName', header: 'Department', cell: (element: any) => `${element.departmentName}` },
    { columnDef: 'user_name', header: 'User Name', cell: (element: any) => `${element.user_name}` },
    { columnDef: 'actions', header: 'Actions', cell: (element: any) => `${element.actions}` },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);

  dataSource = new MatTableDataSource<PeriodicElement>();
  transaction: {};


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

  salesForm = this.fb.group({
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
    this.loadSalesList();
    this.getOrganisationAccounts();
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
    if ($event.value === 'vendor') {
      this.persons = this.vendors;
    } else {
      this.persons = this.customers;
    }
  }

  displayPersonDetails(value, personType) {
    if (personType.value == 'vendor') {
      this.filterForDisplay(this.vendors, value);
    } else {
      this.filterForDisplay(this.customers, value);
    }

  }

  displayInvoice(val) {
    this.showInvoice = val;
  }


  // Executed When Form Is Submitted  
  onFormSubmit(form: any) {
    console.log("UI FORM");
    console.log(form.lineItems);
    this.createTaxLineItem(form);
    console.log("MANIPULATED FORM" + form.lineItems);

    this.getFormData(form);
    console.log(this.transaction);
    console.log("asdasdasdas")
    this.transactionsService.saveSale(form).subscribe(
      data => {
        console.log(data);
        this.invoiceObject = data;
        this.displayInvoice(true);
      }
    );
    // this.displayInvoice(true);
  }

  getSale(transactionNumber) {
    //transactionNumber = 77;
    this.transactionsService.getSale(transactionNumber).subscribe(
      data => {
        console.log(data);
        this.editInvoiceObject = data[0];
        this.getLineItems(transactionNumber);
      }
    );
  }

  getLineItems(transactionNumber) {
    //transactionNumber = 77;
    this.transactionsService.getLineItems(transactionNumber).subscribe(
      data => {
        console.log(data);
        this.editInvoiceObject['lineItems'] = data;
        this.viewInvoice = true;
      }
    );
  }

  deleteSale(transactionNumber) {

  }

  resetForm() {
    this.salesForm.reset();
  }




  /******************************* PRIVATE AREA ***********************************************************/

  private loadSalesList() {
    this.transactionsService.getAllSales().subscribe(
      data => {
        //this.customers  =  data;
        this.dataSource.data = data;
        console.log(data);
      }
    );
  }

  /**
   * Create form product
   */
  private getProduct() {
    const numberPatern = '^[0-9.,]+$';
    return this.fb.group({
      line_item_no: this.productInfoForms.length + 1,  //set line_item_no with the index number
      name: ['', Validators.required],
      products: this.fb.group({ id: ['', Validators.required] }),
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

  private editSaleItem(saleItem) {
    console.log(saleItem);
    this.productObj = saleItem;
  }
  private getContactList() {//load on init
    this.contactsService.getContactList().subscribe(
      data => {
        this.contactList = data;
        console.log(data);
        this.contactList.forEach(contact => {
          console.log(contact);
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
        console.log(data);
      }
    );
  }

  private getOrganisationAccounts() {//load on init
    this.commonService.getOrganisationAccounts().subscribe(
      data => {
        this.organisationAccounts = data;
        console.log(data);
      }
    );
  }


  private filterForDisplay(filterArray, value) {
    filterArray.forEach(contact => {
      if (contact.id == value) {
        this.personDetails = contact;
      }
    });
  }

  private getFormData(form: any) {
    this.transaction = {
      user_id: this.salesForm.controls['user_id'].value,
      user_name: this.salesForm.controls['user_name'].value,
      departmentId: this.salesForm.controls['departmentId'].value,
      departmentName: this.salesForm.controls['departmentName'].value,
      lineItems: form.lineItems,
      accounts: {
        id: "TO BE SET",
        contacts: "TO BE SET",
        accountBalances: "TO BE SET",
        account_type: "TO BE SET",
      },
      headers: {
        headerdate: "TO BE SET",
        headerTypes: {
          "id": "TO BE SET",
        },
        accounts: {
          contacts: "TO BE SET",
          accountBalances: "TO BE SET",
          account_type: "TO BE SET",
        },
      },
    }
  }

  private createTaxLineItem(form: any) {
    form.lineItems.push({
      line_item_no: form.lineItems.length + 1,  //set line_item_no with the index number
      name: "TAX",
      quantity: 1,
      price: form.tax,
      amount: form.tax
    });
  }


}
