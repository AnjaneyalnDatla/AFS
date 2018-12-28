import { Component, OnInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material';

// Must import to use Forms functionality  
import { TransactionsService } from '../../../_services/transactions.service';
import { PeriodicElement } from '../../../_models/common/periodicelement';


@Component({
  selector: 'app-purchases-view',
  templateUrl: './purchases-view.component.html',
  styleUrls: ['./purchases-view.component.css']
})
export class PurchasesViewComponent implements OnInit {

  // Table columns 
  columns = [
    { columnDef: 'transaction_number', header: 'Transaction No.', cell: (element: any) => `${element.transaction_number}` },
    { columnDef: 'accounts.name', header: 'Account', cell: (element: any) => `${element.accounts.name}` },
    { columnDef: 'contact.firstName', header: 'First Name', cell: (element: any) => `${element.contact.firstName}` },
    { columnDef: 'contact.lastName', header: 'Last Name', cell: (element: any) => `${element.contact.lastName}` },
    { columnDef: 'paymentAmount', header: 'Amount', cell: (element: any) => `${element.paymentAmount}` },
    { columnDef: 'paymentDate', header: 'Date', cell: (element: any) => `${element.paymentDate}` },
    { columnDef: 'actions', header: 'Actions', cell: (element: any) => `${element.actions}` },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = new MatTableDataSource<PeriodicElement>();
  pageOptions = [10, 20, 30];

  showPurchaseOrder: boolean = false;
  transactionNumber: String;

  constructor(private transactionsService: TransactionsService) {
  }

  ngOnInit() {
    this.loadSalesList();
  }


  ngAfterViewInit() {
  }



  getPurchase(transaction) {
    this.transactionNumber = transaction.transaction_number;
    this.showPurchaseOrder = true;
  }


  deletePurchase(transactionNumber) {

  }


  /******************************* PRIVATE AREA ***********************************************************/

  private loadSalesList() {
    this.transactionsService.getTransactions(7).subscribe(
      data => {
        //this.customers  =  data;
        this.dataSource.data = data;
        console.log(data);
      }
    );
  }

}
