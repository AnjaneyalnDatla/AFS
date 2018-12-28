import { Component, OnInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material';

// Must import to use Forms functionality  
import { ContactsService } from '../../../_services/contacts.service';
import { PeriodicElement } from '../../../_models/common/periodicelement';

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
  contactId: String ;
  showContact: boolean = false;
  isLoaded: boolean = false;
  cardTitle:String = "View Contact";
  contactForm:any;

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.loadContactList();
  }


  ngAfterViewInit() {
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
        this.contactForm = data;
        this.isLoaded = true;
      }
    );
  }


}
