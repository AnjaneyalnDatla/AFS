import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

// Must import to use Forms functionality  
import { TransactionsService } from '../../../_services/transactions.service';
import { PeriodicElement } from '../../../_models/common/periodicelement';
import { tablecolumns } from 'app/_models/common/table-columns';

declare var $: any;

@Component({
  selector: 'app-sales-view',
  templateUrl: './sales-view.component.html',
  styleUrls: ['./sales-view.component.css']
})
export class SalesViewComponent implements OnInit {

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
    this.loadSalesList();
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

  private loadSalesList() {
    this.transactionsService.getTransactions(1).subscribe(
      data => {
        //this.customers  =  data;
        this.dataSource.data = data;
        console.log(data);
      }
    );
  }

}
