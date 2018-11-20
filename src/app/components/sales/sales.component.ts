import { Component, OnInit, Input} from '@angular/core';
import { MatTableDataSource, MatRadioChange} from '@angular/material';
import {CurrencyPipe} from '@angular/common';
// Must import to use Forms functionality  
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm, FormArray, FormControl } from '@angular/forms';
import { SalesService } from '../../_services/sales.service';
declare var $: any;

export interface Vendor {
  value: string;
  viewValue: string;
}

export interface Accounts {
  value: string;
  viewValue: string;
}

export interface Customers {
  value: string;
  viewValue: string;
}

export interface ProductType {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  id: number;
  name: string;
  type: string;
  price: number;
  quantity: string;
  total: number;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  displayedColumns: string[] = ['id','user_name', 'department_name', 'name', 'price', 'quantity', 'amount'];
  
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  

  vendors = [];
  customers = [];

  accounts: Accounts[] = [
    {value: 'cash', viewValue: 'Cash'},
    {value: 'HDFC Checkings', viewValue: 'HDFC CHECKINGS'},
    {value: 'AXIS Checkings', viewValue: 'AXIS CHECKINGS'}
  ];

  productTypes: ProductType[] = [
    {value: 'electronics', viewValue: 'Electronics'},
    {value: 'furniture', viewValue: 'Furniture'},
    {value: 'food', viewValue: 'Food'},
    {value: 'real_estate', viewValue: 'Real Estate'}
  ];

  //productItems = [{ name: '',type: '',quantity: null ,price: null ,total: 0}];
  productObj = {};
  persons = [];
  contactList = [];
  personDetails = {};
  totalSum: number = 0;
  subTotal: number = 0;
  taxValue: number = 0;

  dataSource = new MatTableDataSource<PeriodicElement>();

  //salesForm: FormGroup;  
  // To initialize FormGroup  
  salesForm = this.fb.group({  
    personType : ['', Validators.required],  
    personTypeValue : ['', Validators.required],  
    productInfo: this.fb.array([]),
    tax: ['' ,Validators.required],
    paymentAmount: ['' ,Validators.required],
    paymentDate: ['' ,Validators.required],
    creditTo: ['' ,Validators.required],
    additionalComments: [],
    subTotal: [{value: '', disabled: true}],
    productsTotal: [{value: '', disabled: true}]
  }); 
  personType:string='';  
  personTypeValue:string=''; 
  isActive:boolean=true;
  
  constructor(private fb: FormBuilder,
    private salesService: SalesService, private currencyPipe: CurrencyPipe,) {  
      //this.salesForm = this.createSaleForm(fb);    
  }

  ngOnInit() {

    
     // initialize stream on products
     const myFormValueChanges$ = this.salesForm.controls['productInfo'].valueChanges;
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

  private loadSalesList() {
    this.salesService.getAllSales().subscribe(
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
      name: ['', Validators.required],
      type: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.pattern(numberPatern)]],
      price: ['', [Validators.required, Validators.pattern(numberPatern)]],
      total: [{value: '', disabled: true}]
    });
  }

  get productInfoForms() {
    return this.salesForm.get('productInfo') as FormArray;
  }

  addProductInfoForms() {
    this.productInfoForms.push(this.getProduct());
  }
  addNewProduct(){   
    const control = <FormArray>this.salesForm.controls['productInfo'];
    control.push(this.getProduct());
  }

  /**
   * Update prices as soon as something changed on product info group
   */
  private updateTotalUnitPrice(products: any) {
    // get our products group controll
    const control = <FormArray>this.salesForm.controls['productInfo'];
    // before recount total price need to be reset. 
    this.totalSum = 0;
    this.subTotal = 0;
    this.taxValue = this.getTax();
    for (let i in products) {
      let totalUnitPrice = (products[i].quantity*products[i].price);
      // now format total price with angular currency pipe
      let totalUnitPriceFormatted = this.currencyPipe.transform(totalUnitPrice, 'USD', 'symbol-narrow', '1.2-2');
      // update total sum field on unit and do not emit event myFormValueChanges$ in this case on products
      control.at(+i).get('total').setValue(totalUnitPriceFormatted, {onlySelf: true, emitEvent: false});
      // update total price for all products
      this.subTotal += totalUnitPrice;      
    }
    this.totalSum = this.subTotal + this.taxValue;
  }

  /**
   * Update total price as soon as tax changed 
   */
  private updateTotalTaxPrice(tax : number){
    // now format tax price with angular currency pipe
    let taxPriceFormatted = this.currencyPipe.transform(tax, 'USD', 'symbol-narrow', '1.2-2');
     
    this.totalSum = this.subTotal + tax;
  }

  private getTax(){
    return this.salesForm.get('tax').value;
  }


  private removeProduct(index){
   const control = <FormArray>this.salesForm.controls['productInfo'];
   if(control.length > 1)
    control.removeAt(index);
   else
    alert("Unable to delete. There should be atleast one product to create a sale.")
  }
  
  private editSaleItem(saleItem){
    console.log(saleItem);
    this.productObj = saleItem;
  }
  private getContactList(){//load on init
    this.salesService.getContactList().subscribe(
      data => {
        this.contactList  =  data;
        console.log(data);
        this.contactList.forEach(contact => {
          console.log(contact);
          if(contact.isCompany == true){
            this.vendors.push(contact);
          }else{
            this.customers.push(contact);
          }
        });
     
      }
    );
  }
  private getCustomerList(){//load on init
    this.salesService.getCustomerList().subscribe(
      data => {
        this.customers  =  data;
        console.log(data);
      }
    );
  }
  private getProductTypes(){//load on init
    this.salesService.getProductTypes().subscribe(
      data => {
        this.productTypes  =  data;
        console.log(data);
      }
    );
  }
  toggleData($event: MatRadioChange){ 
    if($event.value === 'vendor'){
      this.persons = this.vendors;
    }else{
      this.persons = this.customers;
    }
  }

  displayPersonDetails(value, personType){
    if( personType.value == 'vendor'){
      this.filterForDisplay(this.vendors,value);
    }else{
      this.filterForDisplay(this.customers,value);
    }

  }

  private filterForDisplay(filterArray,value){
    filterArray.forEach(contact => {
      if(contact.id == value){
        this.personDetails = contact;
      }
    });
  }

  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
    this.salesService.saveSale(form).subscribe(
      data => {        
        console.log(data);
      }
    );
  }  

  resetForm() { 
    this.salesForm.reset();
} 

}
