import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { Contact } from '../../_models/contact';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatTableModule } from '@angular/material';
import { User } from '../../_models/user';

export interface PeriodicElement {
  position: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '1', name: "Antony" },
  { position: '2', name: "Mark" },
  { position: '3', name: "John" },
  { position: '4', name: "Smith" },
  { position: '5', name: "Aby" },
  { position: '6', name: "Tony" },
  { position: '7', name: "Stark" },
  { position: '8', name: "Neil" },
  { position: '9', name: "Roger" },
  { position: '10', name: "Siddle" },
];
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactForm = new FormGroup({ 
      isCompany: new FormControl(null,[Validators.required]),
      supplementalId: new FormControl(),
      companyName: new FormControl(),
      idNumber: new FormControl(null,[Validators.required]),
      idType: new FormControl(null,[Validators.required]),
      designation: new FormControl(null,[Validators.required]),
      firstName: new FormControl(null,[Validators.required]),
      middleName: new FormControl(),
      lastName: new FormControl(null,[Validators.required]),
      address: new FormGroup({
        streetAddress: new FormControl(null,[Validators.required]),
        city: new FormControl(null,[Validators.required]),
        state: new FormControl(null,[Validators.required]),
        country: new FormControl(null,[Validators.required]),
        postalCode: new FormControl(null,[Validators.required]),
        landMark: new FormControl(null,[Validators.required]),
      }),
      homePhone: new FormControl(),
      cellPhone: new FormControl(null,[Validators.required]),
      faxNumber: new FormControl(),
      primaryEmail: new FormControl(null,[Validators.required]),
      secondaryEmail: new FormControl(),
      additionalComments: new FormControl(),
  });

  displayedColumns: string[] = ['position', 'name'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  createCardTitle= "Create Contact";
  editCardTitle= "Edit Contact";
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
  }

  saveContact(){
    alert(this.contactForm.value.isCompany);
  }

  onFormSubmit(){
      console.log("Inside contacts component" + this.contactForm);
  }

}
