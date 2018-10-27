import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatRadioChange} from '@angular/material';
// Must import to use Forms functionality  
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm, FormArray, FormControl } from '@angular/forms';
import { SalesService } from '../../_services/sales.service';

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

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, type: 'Electronics', name: 'Dell Laptop', price: 50000, quantity: '4', total: 200000},
  {id: 2, type: 'Furniture', name: 'Tables', price: 2000, quantity: '50', total: 100000},
  {id: 3, type: 'Food', name: 'Chicken', price: 700, quantity: '10', total: 700},
  {id: 4, type: 'Real Estate', name: 'Land', price: 1345888, quantity: '1', total: 1345888}
];

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  displayedColumns: string[] = ['id','type', 'name', 'price', 'quantity', 'total'];
  
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  vendors: Vendor[] = [
    {value: 'RamRao', viewValue: 'Ram'},
    {value: 'KrishnaRao', viewValue: 'Krishna'},
    {value: 'SubbaRao', viewValue: 'Subbu'}
  ];

  accounts: Accounts[] = [
    {value: 'cash', viewValue: 'Cash'},
    {value: 'HDFC Checkings', viewValue: 'HDFC CHECKINGS'},
    {value: 'AXIS Checkings', viewValue: 'AXIS CHECKINGS'}
  ];

  customers: Customers[] = [
    {value: 'ramesh', viewValue: 'Ramesh'},
    {value: 'suresh', viewValue: 'Suresh'},
    {value: 'ganesh', viewValue: 'Ganesh'}
  ];

  productTypes: ProductType[] = [
    {value: 'electronics', viewValue: 'Electronics'},
    {value: 'furniture', viewValue: 'Furniture'},
    {value: 'food', viewValue: 'Food'},
    {value: 'real_estate', viewValue: 'Real Estate'}
  ];

  productItems = [{ name: '',type: '',quantity: 0,price: '',total: 0}];
  productObj = {};
  persons = [];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  salesForm: FormGroup;  
  personType:string='';  
  personTypeValue:string=''; 
  isActive:boolean=true;
  
  constructor(private fb: FormBuilder,
    private salesService: SalesService, ) {  

  }

  ngOnInit() {    
     // To initialize FormGroup  
     this.salesForm = this.fb.group({  
      personType : [null, Validators.required],  
      personTypeValue : [null, Validators.required],  
      productInfo: new FormArray([
        new FormGroup({
          name: new FormControl(),
          type: new FormControl(),
          quantity: new FormControl(),
          price: new FormControl(),
          total: new FormControl()
        })
      ]),
      tax: [null ,Validators.required],
      paymentAmount: [null ,Validators.required],
      paymentDate: [null ,Validators.required],
      creditTo: [null ,Validators.required],
      additionalComments: []
    }); 
  }
  

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
   // this.dataSource.sort = this.sort;
  }
  addNewProduct(){
    //this.productItems.push(this.product);
    const control = <FormArray>this.salesForm.controls['productInfo'];
    //console.log(control);
    this.productItems.forEach(x => {
      control.push(this.fb.group({ 
        name: x.name, 
        type: x.type,
        quantity: x.quantity,
        price: x.price,
        total: x.total
        }))
    })
  }
  removeProduct(index){
   const control = <FormArray>this.salesForm.controls['productInfo'];
   control.removeAt(index);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  editSaleItem(saleItem){
    console.log(saleItem);
    this.productObj = saleItem;
  }
  getVendorList(){//load on init
    this.salesService.getVendorList().subscribe(
      data => {
        this.vendors  =  data;
        console.log(data);
      }
    );
  }
  getCustomerList(){//load on init
    this.salesService.getCustomerList().subscribe(
      data => {
        this.customers  =  data;
        console.log(data);
      }
    );
  }
  getProductTypes(){//load on init
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
  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
  }  

}
