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
  roles = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'user', viewValue: 'User' },
    { value: 'guest', viewValue: 'Guest' }
  ];
  hide = true;

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  onFormSubmit(form: any) {
    console.log(form);
    this.userService.createUser(form);
  }

}