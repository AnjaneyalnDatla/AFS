import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

// Must import to use Forms functionality  
import { ContactsService } from '../../../_services/contacts.service';
import { PeriodicElement } from '../../../_models/common/periodicelement';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.css']
})
export class ContactsViewComponent implements OnInit {

  // Table columns 
  columns = [
    { columnDef: 'firstName', header: 'First Name', cell: (element: any) => `${element.firstName}` },
    { columnDef: 'lastName', header: 'Last Name', cell: (element: any) => `${element.lastName}` },
    { columnDef: 'companyName', header: 'Company Name', cell: (element: any) => `${element.companyName}` },
    { columnDef: 'isCompany', header: 'Company?', cell: (element: any) => `${element.isCompany}` },
    { columnDef: 'emailAddress', header: 'Email', cell: (element: any) => `${element.emailAddress}` },
    { columnDef: 'cellPhone', header: 'Cell Phone', cell: (element: any) => `${element.cellPhone}` },
    { columnDef: 'actions', header: 'Actions', cell: (element: any) => `${element.actions}` },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = new MatTableDataSource<PeriodicElement>();
  pageOptions = [10, 20, 30];
  contactId: String;
  showContact: boolean = false;
  isLoaded: boolean = false;
  cardTitle: String = "Contact";

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


  constructor(private contactsService: ContactsService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    console.log("CALLED ngOnInit");
    this.loadContactList();
  }


  ngAfterViewInit() {
    console.log("CALLED ngAfterViewInit");
  }



  getContact(contact) {
    console.log("Contact ID = " + JSON.stringify(contact));
    this.loadContactById(contact.id);
    this.showContact = true;
  }



  /******************************* PRIVATE AREA ***********************************************************/

  private loadContactList() {
    this.contactsService.getContactList().subscribe(
      data => {
        //this.customers  =  data;
        this.dataSource.data = data;
        console.log(data);
      }
    );
  }

  private loadContactById(contactId) {
    this.contactsService.getContactById(contactId).subscribe(
      data => {
        console.log(data);
        this.contactForm.controls['id'].setValue(data.id);
        this.contactForm.controls['supplementalId'].setValue(data.supplementalId);
        if (data.isCompany == true) {
          this.contactForm.controls['isCompany'].setValue("vendor");
        } else {
          this.contactForm.controls['isCompany'].setValue("customer");
        }
        this.contactForm.controls['companyName'].setValue(data.companyName);
        this.contactForm.controls['firstName'].setValue(data.firstName);
        this.contactForm.controls['middleName'].setValue(data.middleName);
        this.contactForm.controls['lastName'].setValue(data.lastName);
        this.contactForm.controls['cellPhone'].setValue(data.cellPhone);
        this.contactForm.controls['homePhone'].setValue(data.homePhone);
        this.contactForm.controls['faxNumber'].setValue(data.faxNumber);
        this.contactForm.controls['primaryEmail'].setValue(data.emailAddress);
        (<FormGroup>this.contactForm.controls['address']).controls['streetAddress'].setValue(data.streetAddress);
        (<FormGroup>this.contactForm.controls['address']).controls['city'].setValue(data.city);
        (<FormGroup>this.contactForm.controls['address']).controls['state'].setValue(data.state);
        (<FormGroup>this.contactForm.controls['address']).controls['country'].setValue(data.country);
        (<FormGroup>this.contactForm.controls['address']).controls['postalCode'].setValue(data.postalCode);
        (<FormGroup>this.contactForm.controls['address']).controls['landMark'].setValue(data.landMark);
        this.contactForm.controls['additionalComments'].setValue(data.additionalComments);
        this.contactForm.controls['idType'].setValue(data.idType);
        this.contactForm.controls['idNumber'].setValue(data.idNumber);
        this.contactForm.controls['designation'].setValue(data.designation);
        this.isLoaded = true;
      }
    );
  }


}
