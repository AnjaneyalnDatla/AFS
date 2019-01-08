import { Component, OnInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material';

// Must import to use Forms functionality  
import { TransactionsService } from '../../../_services/transactions.service';
import { PeriodicElement } from '../../../_models/common/periodicelement';


@Component({
  selector: 'app-receivables-view',
  templateUrl: './receivables-view.component.html',
  styleUrls: ['./receivables-view.component.css']
})
export class ReceivablesViewComponent implements OnInit {


  // Table columns 
  columns = [
    { columnDef: 'transaction_number', header: 'Transaction No.', cell: (element: any) => `${element.transaction_number}` },
    { columnDef: 'transactionStatus.value', header: 'Transaction Status', cell: (element: any) => `${element.transactionStatus.value}` },
    { columnDef: 'contact.companyName', header: 'Company Name', cell: (element: any) => `${element.contact.companyName}` },
    { columnDef: 'contact.firstName', header: 'First Name', cell: (element: any) => `${element.contact.firstName}` },
    { columnDef: 'contact.lastName', header: 'Last Name', cell: (element: any) => `${element.contact.lastName}` },
    { columnDef: 'paymentAmount', header: 'Amount', cell: (element: any) => `${element.paymentAmount}` },
    { columnDef: 'creationdate', header: 'Date', cell: (element: any) => `${element.creationdate}` },
    { columnDef: 'actions', header: 'Actions', cell: (element: any) => `${element.actions}` },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  dataSource = new MatTableDataSource<PeriodicElement>();
  pageOptions = [10, 20, 30];

  invoiceObject = {};
  showInvoice: boolean = false;
  transactionNumber: String;

  constructor(private transactionsService: TransactionsService) {
  }

  ngOnInit() {
    this.loadReceivablesList();
  }


  ngAfterViewInit() {
  }



  getSale(transaction) {
    console.log("TRANSACTION" + JSON.stringify(transaction));
    this.transactionNumber = transaction.transaction_number;
    this.showInvoice = true;
  }

  toggleOnBack(){
    this.showInvoice = false;
  }


  deleteSale(transactionNumber) {

  }


  /******************************* PRIVATE AREA ***********************************************************/

  private loadReceivablesList() {
    this.transactionsService.getTransactions(10).subscribe(
      data => {
        //this.customers  =  data;
        this.dataSource.data = data;
        console.log(data);
      }
    );
  }

}
