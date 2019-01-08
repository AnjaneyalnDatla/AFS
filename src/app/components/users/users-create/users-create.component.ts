import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  userForm = this.fb.group({
    designation: [''],
    department: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    confirmPswd: ['', Validators.required],
    profileName: [''],
    priv: ['']
  });

  privList = [
      {name: 'Dashboard'},
      {name: 'Sales'},
      {name: 'Purchases'},
      {name: 'Payments'},
      {name: 'Contacts'},
      {name: 'Accounts'},
      {name: 'Reports'}
  ]

  cardTitle = "Create User";
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  saveContact() {
  }

  onFormSubmit() {
    console.log("Inside contacts component" + this.userForm);
  }

}
