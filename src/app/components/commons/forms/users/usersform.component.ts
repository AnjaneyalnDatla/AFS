import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../../../_services/user.service';

@Component({
  selector: 'app-usersform',
  templateUrl: './usersform.component.html'
})

export class UsersFormComponent implements OnInit {

  @Input() userForm: FormGroup;
  @Input() cardTitle;

  constructor(private fb: FormBuilder, private userService: UserService) { }
  roles = [];
  organizations = [];
  departments = [
    {'id':1,'name':'Computer Science'},
    {'id':2,'name':'Information Technology'},
    {'id':3,'name':'Billing'}
  ]
  hide = true;

  async ngOnInit() {
    //load departments, organizations and roles list in create user page
    await this.fetchOrganizations();
    await this.fetchRoles();

  }

  fetchOrganizations(){
    this.userService.getOrganizations().subscribe(
      data => {
        console.log('Orgs: ' + data);
        this.organizations = data;
      })
  }

  fetchRoles(){
    this.userService.getRoles().subscribe(
      data => {
        console.log('Roles: ' + data);
        this.roles = data;
      })
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  onFormSubmit(form: any) {
    this.userService.createUser(form);
  }

}