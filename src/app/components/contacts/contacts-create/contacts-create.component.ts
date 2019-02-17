import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidationService } from '../../../_services/validation.service';

@Component({
  selector: 'app-contacts-create',
  templateUrl: './contacts-create.component.html',
  styleUrls: ['./contacts-create.component.css']
})
export class ContactsCreateComponent implements OnInit {

  contactForm = this.fb.group({
    id: ['', Validators.required],
    isCompany: [''],
    supplementalId: ['', Validators.required],
    companyName: ['', Validators.required],
    idNumber: ['', Validators.required],
    idType: ['', Validators.required],
    designation: [''],
    panIdNumber: ['', [Validators.required, ValidationService.panValidator]],
    isGST: [''],
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    address: this.fb.group({
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required, Validators.pattern("[0-9]{0,10}")],
      landMark: [''],
    }),
    homePhone: ['', Validators.pattern("[0-9]{0,10}")],
    cellPhone: ['', Validators.pattern("[0-9]{0,10}")],
    faxNumber: ['', Validators.pattern("[0-9]{0,10}")],
    primaryEmail: ['', [Validators.required, ValidationService.emailValidator]],
    secondaryEmail: [''],
    additionalComments: [''],
    current_balance: '0'
  });

  cardTitle = "Create Contact";
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  saveContact() {
    alert(this.contactForm.value.isCompany);
  }

  onFormSubmit() {
    console.log("Inside contacts component" + this.contactForm);
  }

  

}
