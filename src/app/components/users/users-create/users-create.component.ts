import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from '../../../_services/validation.service';
import { ConfirmPasswordValidator } from '../../../_helpers/confirmPasswordValidator';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  userForm = this.fb.group({
    department: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', [Validators.required, ValidationService.emailValidator]],
    email: ['', [Validators.required, ValidationService.emailValidator]],
    password: ['', [Validators.required, ValidationService.passwordValidator]],
    confirmPswd: ['', Validators.required],
    roles:['' ,Validators.required],
    organization:['' ,Validators.required]
  },{
    validator: ConfirmPasswordValidator.MatchPassword
 });

  privFormGrp: FormGroup = new FormGroup({});
  roleForm = this.fb.group({
    roleName: ['', Validators.required],
    description: ['', Validators.required],
    privileges: this.privFormGrp
  });

  privList = [
      {name: 'Dashboard'},
      {name: 'Sales'},
      {name: 'Purchases'},
      {name: 'Expenses'},
      {name: 'Receivables'},
      {name: 'Payments'},
      {name: 'Contacts'},
      {name: 'Accounts'},
      {name: 'Reports'}
  ]



  cardTitle = "Create User";
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addPrivBlock();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    
  }

  addPrivBlock() {
    for(let priv of this.privList){
      let control: FormControl = new FormControl("",Validators.required);
      this.privFormGrp.addControl(priv.name,control);
    }
    console.log(this.roleForm)
  }

  
  onFormSubmit(form: any) {
    console.log("Inside users component" + form);
  }

}
