import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatTableModule } from '@angular/material';
import { User } from '../../../_models/user';


export interface PeriodicElement {
  position: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '1', name: "Antony" },
  { position: '2', name: "Mark" },
  { position: '3', name: "John" },
  { position: '4', name: "Smith" },
  { position: '5', name: "Aby" },
  { position: '6', name: "Tony" },
  { position: '7', name: "Stark" },
  { position: '8', name: "Neil" },
  { position: '9', name: "Roger" },
  { position: '10', name: "Siddle" },
];

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  //displayedColumns: string[] = ['position', 'name'];
  columns = [
    { columnDef: 'position', header: 'Position',    cell: (element: any) => `${element.position}` },
    { columnDef: 'name',     header: 'Name',   cell: (element: any) => `${element.name}`     },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  createCardTitle= "Create Account";
  editCardTitle= "Edit Account";

  constructor() { }

  ngOnInit() {
  }

}
