import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacts-create',
  templateUrl: './contacts-create.component.html',
  styleUrls: ['./contacts-create.component.css']
})
export class ContactsCreateComponent implements OnInit {

  contactForm = this.fb.group({
    id: ['', Validators.required],
    isCompany: ['', Validators.required],
    supplementalId: ['', Validators.required],
    companyName: ['', Validators.required],
    idNumber: ['', Validators.required],
    idType: ['', Validators.required],
    designation: ['', Validators.required],
    firstName: ['', Validators.required],
    middleName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
      landMark: ['', Validators.required],
    }),
    homePhone: ['', Validators.required],
    cellPhone: ['', Validators.required],
    faxNumber: ['', Validators.required],
    primaryEmail: ['', Validators.required],
    secondaryEmail: ['', Validators.required],
    additionalComments: ['', Validators.required],
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
