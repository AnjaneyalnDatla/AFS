import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../../../_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersform',
  templateUrl: './usersform.component.html'
})

export class UsersFormComponent implements OnInit {

  @Input() userForm: FormGroup;
  @Input() cardTitle;
  @Input() showUser;

  constructor(private fb: FormBuilder, private userService: UserService,
    private router: Router, private toastr: ToastrService) { }
  roles = [];
  organizations = [];
  departments = [
    { 'id': 1, 'name': 'Computer Science' },
    { 'id': 2, 'name': 'Information Technology' },
    { 'id': 3, 'name': 'Billing' }
  ]
  hide = true;
  message: String;

  async ngOnInit() {
    //load departments, organizations and roles list in create user page
    await this.fetchOrganizations();
    await this.fetchRoles();
    this.setPasswordValidators();
  }

  private setPasswordValidators() {
    const passwordControl = this.userForm.get('password');
    const confirmPswdControl = this.userForm.get('confirmPswd');

    if (this.showUser == true) {
      passwordControl.setValidators(null);
      confirmPswdControl.setValidators(null);
      //disable user name field for edit
      this.userForm.get('username').disable();
    } else {
      passwordControl.setValidators([Validators.required]);
      confirmPswdControl.setValidators([Validators.required]);
      //enable user name field for edit
      this.userForm.get('username').enable();
    }
    passwordControl.updateValueAndValidity();
    confirmPswdControl.updateValueAndValidity();
  }

  fetchOrganizations() {
    this.userService.getOrganizations().subscribe(
      data => {
        console.log('Orgs: ' + data);
        this.organizations = data;
      })
  }

  fetchRoles() {
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
    if (this.showUser == true) {
      this.userService.updateUser(form).subscribe(
        data => {
          console.log(data);
          this.toastr.info('User saved successfully ', 'Success', {
            timeOut: 3000,
            progressBar: true
          });
          this.message = "User saved successfully";
          this.userForm.reset();
          this.userForm.markAsPristine();
          this.userForm.markAsUntouched();
          this.userForm.updateValueAndValidity();
        });
    } else {
      this.userService.createUser(form).subscribe(
        data => {
          console.log(data);
          this.toastr.info('User saved successfully ', 'Success', {
            timeOut: 3000,
            progressBar: true
          });
          this.userForm.reset();
          this.userForm.markAsPristine();
          this.userForm.markAsUntouched();
          this.userForm.updateValueAndValidity();
        });
    }
  }

}