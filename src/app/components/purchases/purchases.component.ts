import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatTableModule } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormArray, FormControl, Form } from '@angular/forms';
import { ContactsService } from '../../_services/contacts.service';
import { CommonService } from '../../_services/common.service';
import { DropDown } from '../../_models/dropdown';

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

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];


const ACCOUNTS: Accounts[] = [
  { value: 'cash', viewValue: 'Cash' },
  { value: 'HDFC Checkings', viewValue: 'HDFC CHECKINGS' },
  { value: 'AXIS Checkings', viewValue: 'AXIS CHECKINGS' }
];


@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  tableHeaders: string[] = ['type', 'name', 'pricePerUnit', 'quantity', 'total'];
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  columns = [
    { columnDef: 'position', header: 'Position',    cell: (element: any) => `${element.position}` },
    { columnDef: 'name',     header: 'Name',   cell: (element: any) => `${element.name}`     },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);

  product: { name: '', type: '', price: '', quantity: 0, total: 0 }
  productTypes: DropDown[];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  accounts = ACCOUNTS;

  contactList = [];

  purchaseForm: FormGroup;
  constructor(private fb: FormBuilder,
    private contactsService: ContactsService,
    private commonService: CommonService) { }

  ngOnInit() {
    this.purchaseForm = this.fb.group({
      purchaseFrom: ['', Validators.required],
      purchaseDt: ['', Validators.required],
      deliveryTo: ['', Validators.required],
      deliveryDt: ['', Validators.required],
      debitFrom: ['', Validators.required],
      productItems: this.fb.array([]),
      additionalComments: ['', Validators.required],
      subtotal: ['', Validators.required],
      tax: ['', Validators.required],
      shipping: ['', Validators.required],
      other: ['', Validators.required],
      total: ['', Validators.required],
    });

    /** Updating the purchasefrom and delivery to drop downs */
    this.getContactList();
    this.getProductTypes();

  }
  ngAfterViewInit() { }

  /** ProductItem get */
  get productItemForms() {
    return this.purchaseForm.get('productItems') as FormArray;
  }

  /** ProductItem add */
  addProductItems() {
    this.productItemForms.push(this.getProduct());
  }

  /** ProductItem remove */
  removeProduct(index) {
    const control = <FormArray>this.purchaseForm.controls['productItems'];
    control.removeAt(index);
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
  }










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
}
