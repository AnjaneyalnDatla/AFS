import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ServiceUtil } from '../../../_helpers/serviceutil';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  accountForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    account_type: ['', Validators.required],
    currentBalance: ['', Validators.required],
    dateUpdated: ['', Validators.required],
    isActive: ['', Validators.required],
    organisation: this.fb.group({
      name: this.serviceUtil.getGroupName(),
      code: this.serviceUtil.getGroupCode()
    })
  });

  cardTitle = "Create Account";
  constructor(private fb: FormBuilder,
    private serviceUtil: ServiceUtil) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }


}
