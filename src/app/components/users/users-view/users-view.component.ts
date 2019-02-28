import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource} from '@angular/material';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

      // Table columns 
  columns = [
    { columnDef: 'firstName', header: 'First Name', sort: true, visibility: true, cell: (element: any) => `<b>${element.firstName}</b>` },
    { columnDef: 'lastName', header: 'Last Name', sort: true, visibility: true, cell: (element: any) => `<b>${element.lastName}</b>` },
    { columnDef: 'username', header: 'User Name', sort: true, visibility: true, cell: (element: any) => `${element.username}` },
    { columnDef: 'role', header: 'Role', sort: true, visibility: true,  cell: (element: any) => `<button mat-raised-button class="btn btn-info btn-sm">${element.role}</button>` },
    { columnDef: 'email', header: 'Email', sort: true, visibility: true, cell: (element: any) => `<b>${element.email}</b>` },
    { columnDef: 'enabled', header: 'Status', sort: false, visibility: true, cell: (element: any) => `<button mat-raised-button class="btn btn-success btn-sm">${element.enabled}</button>` },
    { columnDef: 'actions', header: 'Actions', sort: false, visibility: false, cell: (element: any) => `${element.actions}` },
  ];

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

  dataSource=new MatTableDataSource();

  //dataSource = new MatTableDataSource(this.testData);
  pageOptions = [10, 20, 30];

  displayedColumns1 = this.columns1.map(c => c.columnDef);
  dataSource1 = new MatTableDataSource(this.roleData);


  cardTitle = "View User";
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsersList().subscribe(
      data => {
        console.log('User List: ' + data);
        this.dataSource = data;
      })
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    
  }

}
