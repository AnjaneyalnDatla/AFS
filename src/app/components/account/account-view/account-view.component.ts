import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

// Must import to use Forms functionality  
import { CommonService } from '../../../_services/common.service';
import { PeriodicElement } from '../../../_models/common/periodicelement';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  // Table columns 
  columns = [
    { columnDef: 'name', header: 'Account Name', cell: (element: any) => `${element.name}` },
    { columnDef: 'account_type.name', header: 'Type', cell: (element: any) => `${element.account_type.name}` },
    { columnDef: 'account_type.accountCategory.name', header: 'Accounting Type', cell: (element: any) => `${element.account_type.accountCategory.name}` },
    { columnDef: 'currentBalance', header: 'Balance', cell: (element: any) => `${element.currentBalance}` },
    { columnDef: 'isActive', header: 'Status', cell: (element: any) => `${element.isActive}` },
    { columnDef: 'actions', header: 'Actions', cell: (element: any) => `${element.actions}` },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = new MatTableDataSource<PeriodicElement>();
  pageOptions = [10, 20, 30];

  accountForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    account_type: ['', Validators.required],
    currentBalance: ['', Validators.required],
    dateUpdated: ['', Validators.required],
    isActive: ['', Validators.required],
  });
  showBankAccount: boolean;
  cardTitle: String = "Account";
  isLoaded: boolean = false;



  constructor(private commonService: CommonService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loadAccountsList();
  }


  ngAfterViewInit() {
  }

  getAccount(account) {
    console.log("Contact ID = " + JSON.stringify(account));
    this.loadAccountById(account.id);
    this.showBankAccount = true;
  }




  /******************************* PRIVATE AREA ***********************************************************/

  private loadAccountsList() {
    this.commonService.getAccounts().subscribe(
      data => {
        //this.customers  =  data;
        this.dataSource.data = data;
        console.log(data);
      }
    );
  }

  private loadAccountById(accountId) {
    this.commonService.getAccountById(accountId).subscribe(
      data => {
        console.log(data);

        this.accountForm.controls['id'].setValue(data.id);

        this.accountForm.controls['name'].setValue(data.name);
        this.accountForm.controls['description'].setValue(data.description);
        this.accountForm.controls['account_type'].setValue(data.account_type);
        this.accountForm.controls['currentBalance'].setValue(data.currentBalance);
        this.accountForm.controls['dateUpdated'].setValue(data.dateUpdated);
        this.accountForm.controls['isActive'].setValue(data.isActive);
        this.isLoaded = true;
      }
    );
  }


}
