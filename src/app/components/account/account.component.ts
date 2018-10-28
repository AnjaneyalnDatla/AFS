import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { Contact } from '../../_models/contact';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatTableModule } from '@angular/material';
import { User } from '../../_models/user';


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
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  createCardTitle= "Create Account";
  editCardTitle= "Edit Account";

  constructor() { }

  ngOnInit() {
  }

}
