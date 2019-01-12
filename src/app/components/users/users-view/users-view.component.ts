import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

      // Table columns 
  columns = [
    { columnDef: 'name', header: 'Name', cell: (element: any) => `<b>${element.name}</b>` },
    { columnDef: 'userName', header: 'User Name', cell: (element: any) => `${element.userName}` },
    { columnDef: 'role', header: 'Role', cell: (element: any) => `<button mat-raised-button class="btn btn-info btn-sm">${element.role}</button>` },
    { columnDef: 'status', header: 'Status', cell: (element: any) => `<button mat-raised-button class="btn btn-success btn-sm">${element.status}</button>` },
    { columnDef: 'actions', header: 'Actions', cell: (element: any) => `${element.actions}` },
  ];
  testData = [
    {
      "id": 1,
      "status": "Active",
      "name": "Katrine Elbek",
      "userName": "demo.kat@traede.com",
      "role": "Administrator",
    },
    {
      "id": 2,
      "status": "Inactive",
      "name": "Katrine Obling",
      "userName": "demo.agent@traede.com",
      "role": "Agent"
    },
    {
      "id": 3,
      "status": "Active",
      "name": "Yvonne",
      "userName": "demo.lone@traede.com",
      "role": "Administrator"
    }
  ]

  columns1 = [
      { columnDef: 'role', header: 'Role', cell: (element: any) => `<button mat-raised-button class="btn btn-info btn-sm">${element.role}</button>` },
      { columnDef: 'description', header: 'Description', cell: (element: any) => `${element.description}` },
      { columnDef: 'actions', header: 'Actions', cell: (element: any) => `${element.actions}` },
  ];

  roleData = [
    {
        "description": "Grant all access",
        "role": "Administrator",
      },
      {
        "description": "Grant access to sales",
        "role": "Agent",
      },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = new MatTableDataSource(this.testData);
  pageOptions = [10, 20, 30];

  displayedColumns1 = this.columns1.map(c => c.columnDef);
  dataSource1 = new MatTableDataSource(this.roleData);


  cardTitle = "View User";
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    
  }

}
