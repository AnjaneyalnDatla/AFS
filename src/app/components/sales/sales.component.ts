import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatTableModule} from '@angular/material';
// Must import to use Forms functionality  
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm, FormArray, FormControl } from '@angular/forms';

export interface Vendor {
  value: string;
  viewValue: string;
}

export interface Accounts {
  value: string;
  viewValue: string;
}

export interface Students {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  id: number;
  name: string;
  type: string;
  price: number;
  quantity: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, type: 'Electronics', name: 'Dell Laptop', price: 50000, quantity: '4'},
  {id: 2, type: 'Furniture', name: 'Tables', price: 2000, quantity: '50'},
  {id: 3, type: 'Food', name: 'Chicken', price: 700, quantity: '10'},
  {id: 4, type: 'Real Estate', name: 'Land', price: 1345888, quantity: '1'},
];

declare interface ProductInfo {
  name: string;
  type: string;
  quantity: number;
  price: string;
}

export const Products: ProductInfo[] = []



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  //productItems: any[];

  displayedColumns: string[] = ['type', 'name', 'price', 'quantity','actions'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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

  students: Students[] = [
    {value: 'ramesh', viewValue: 'Ramesh'},
    {value: 'suresh', viewValue: 'Suresh'},
    {value: 'ganesh', viewValue: 'Ganesh'}
  ];

  productItems = [{ name: '',type: '',quantity: 0,price: ''}];
  productObj = {};

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  salesForm: FormGroup;  
  personType:string='';  
  personTypeValue:string=''; 

  constructor(private fb: FormBuilder) {  

  }

  ngOnInit() {    
     // To initialize FormGroup  
     this.salesForm = this.fb.group({  
      personType : [null, Validators.required],  
      personTypeValue : [null, Validators.required],  
      //productInfo: this.fb.group(this.buildProductList())
      productInfo: new FormArray([
        new FormGroup({
          name: new FormControl(),
          type: new FormControl(),
          quantity: new FormControl(),
          price: new FormControl(),
        })
      ]),
      tax: [null ,Validators.required],
      paymentAmount: [null ,Validators.required],
      paymentDate: [null ,Validators.required],
      creditTo: [null ,Validators.required],
      additionalComments: []
    }); 
    //this.productItems = Products.filter(productItem => productItem);    
   // this.addNewProduct();
  }
  buildProductList() {
    const arr = this.productItems.map(product => {
      return this.fb.control(product);
    });
    return this.fb.array(arr);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  addNewProduct(){
    //this.productItems.push(this.product);
    const control = <FormArray>this.salesForm.controls['productInfo'];
    console.log(control);
    this.productItems.forEach(x => {
      control.push(this.fb.group({ 
        name: x.name, 
        type: x.type,
        quantity: x.quantity,
        price: x.price,
        }))
    })

    //this.productItems = this.salesForm.get('productInfo') as FormArray;
  //this.productItems.push(this.createItem());
  }
  removeProduct(index){
   // console.log(this.productItems);
   // this.productItems.splice(index,1);
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
  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
  }  

}
