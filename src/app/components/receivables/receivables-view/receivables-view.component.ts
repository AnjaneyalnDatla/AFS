import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

// Must import to use Forms functionality  
import { TransactionsService } from '../../../_services/transactions.service';
import { PeriodicElement } from '../../../_models/common/periodicelement';
import { tablecolumns } from 'app/_models/common/table-columns';


@Component({
  selector: 'app-receivables-view',
  templateUrl: './receivables-view.component.html',
  styleUrls: ['./receivables-view.component.css']
})
export class ReceivablesViewComponent implements OnInit {


  // Table columns 
  columns = tablecolumns;

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

  toggleOnBack() {
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
