import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource, MatRadioChange } from '@angular/material';
import { CurrencyPipe } from '@angular/common';
// Must import to use Forms functionality  
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormArray, FormControl } from '@angular/forms';
import { TransactionsService } from '../../_services/transactions.service';
import { ContactsService } from '../../_services/contacts.service';
import { CommonService } from '../../_services/common.service';
import { DropDown } from '../../_models/dropdown';
import { PeriodicElement } from '../../_models/periodicelement';

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
    { columnDef: 'actions',   header: 'Actions', cell: (element: any) => `${element.actions}`   },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);

  dataSource = new MatTableDataSource<PeriodicElement>();


//declarations
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
    user_id: '3',
    user_name: 'Kaushik Gollapalli',
    departmentId: '1',
    departmentName: 'Computer Science'
  });


  constructor(private fb: FormBuilder,
    private transactionsService: TransactionsService, private currencyPipe: CurrencyPipe,
    private contactsService: ContactsService,
    private commonService: CommonService) {
    //this.salesForm = this.createSaleForm(fb);    
  }

  ngOnInit() {

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
  onFormSubmit(form: NgForm) {
    console.log(form);

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

  deleteSale(transactionNumber){

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


  private filterForDisplay(filterArray, value) {
    filterArray.forEach(contact => {
      if (contact.id == value) {
        this.personDetails = contact;
      }
    });
  }



}
