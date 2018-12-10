import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatRadioChange } from '@angular/material';
// Must import to use Forms functionality  
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormArray, FormControl } from '@angular/forms';

export interface ReportType {
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
  { id: 1, type: 'Electronics', name: 'Dell Laptop', price: 50000, quantity: '4', total: 200000 },
  { id: 2, type: 'Furniture', name: 'Tables', price: 2000, quantity: '50', total: 100000 },
  { id: 3, type: 'Food', name: 'Chicken', price: 700, quantity: '10', total: 700 },
  { id: 4, type: 'Real Estate', name: 'Land', price: 1345888, quantity: '1', total: 1345888 }
];

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'type', 'name', 'price', 'quantity', 'total'];
  columns = [
    { columnDef: 'id', header: 'Id',    cell: (element: any) => `${element.id}` },
    { columnDef: 'type',     header: 'Type',   cell: (element: any) => `${element.type}` },
    { columnDef: 'name', header: 'Name',    cell: (element: any) => `${element.name}` },
    { columnDef: 'price',     header: 'Price',   cell: (element: any) => `${element.price}` },
    { columnDef: 'quantity', header: 'Quantity',    cell: (element: any) => `${element.quantity}` },
    { columnDef: 'total',     header: 'Total',   cell: (element: any) => `${element.total}` },
  ];

  //displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  reportTypes: ReportType[] = [
    { value: 'sales', viewValue: 'Sales' },
    { value: 'purchases', viewValue: 'Purchases' },
    { value: 'contacts', viewValue: 'Contacts' },
    { value: 'accounts', viewValue: 'Accounts' }
  ];
  reportTypeValue: string = '';
  reportForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // To initialize FormGroup  
    this.reportForm = this.fb.group({
      reportTypeValue: [null, Validators.required],
      reportStartDate: [null],
      reportEndDate: [null],
    });

  }

  ngOnInit() {
  }

  exportAsExcel() { }

}
