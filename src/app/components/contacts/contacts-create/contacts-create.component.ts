import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource, MatTableModule } from '@angular/material';
import { User } from '../../../_models/user';

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
  selector: 'app-contacts-create',
  templateUrl: './contacts-create.component.html',
  styleUrls: ['./contacts-create.component.css']
})
export class ContactsCreateComponent implements OnInit {

  contactForm = new FormGroup({ 
      isCompany: new FormControl('',[Validators.required]),
      supplementalId: new FormControl(),
      companyName: new FormControl(),
      idNumber: new FormControl('',[Validators.required]),
      idType: new FormControl('',[Validators.required]),
      designation: new FormControl('',[Validators.required]),
      firstName: new FormControl('',[Validators.required]),
      middleName: new FormControl(),
      lastName: new FormControl('',[Validators.required]),
      address: new FormGroup({
        streetAddress: new FormControl('',[Validators.required]),
        city: new FormControl('',[Validators.required]),
        state: new FormControl('',[Validators.required]),
        country: new FormControl('',[Validators.required]),
        postalCode: new FormControl('',[Validators.required]),
        landMark: new FormControl('',[Validators.required]),
      }),
      homePhone: new FormControl(),
      cellPhone: new FormControl('',[Validators.required]),
      faxNumber: new FormControl(),
      primaryEmail: new FormControl('',[Validators.required]),
      secondaryEmail: new FormControl(),
      additionalComments: new FormControl(),
  });

  //displayedColumns: string[] = ['position', 'name'];
  columns = [
    { columnDef: 'position', header: 'Position',    cell: (element: any) => `${element.position}` },
    { columnDef: 'name',     header: 'Name',   cell: (element: any) => `${element.name}`     },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);

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
