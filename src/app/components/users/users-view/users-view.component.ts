import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../../../_services/user.service';
import { usercolumns, userrolescolumns } from 'app/_models/common/table-columns';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

  // Table columns 
  columns = usercolumns;

  columns1 = userrolescolumns;

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

  dataSource = new MatTableDataSource();

  //dataSource = new MatTableDataSource(this.testData);
  pageOptions = [10, 20, 30];

  displayedColumns1 = this.columns1.map(c => c.columnDef);
  dataSource1 = new MatTableDataSource();


  cardTitle = "View User";
  constructor(private fb: FormBuilder, private userService: UserService) { }

  async ngOnInit() {
    await this.fetchUserDetails();
    await this.fetchRoles();
  }

  fetchUserDetails() {
    this.userService.getUsersList().subscribe(
      data => {
        console.log('User List: ' + data);
        this.dataSource = data;
      })
  }

  fetchRoles() {
    this.userService.getRoles().subscribe(
      data => {
        console.log('Roles: ' + data);
        this.dataSource1 = data;
      })
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;

  }

}
