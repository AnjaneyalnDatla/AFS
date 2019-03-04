import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

// Must import to use Forms functionality  
import { TransactionsService } from '../../../_services/transactions.service';
import { PeriodicElement } from '../../../_models/common/periodicelement';
import { tablecolumns } from 'app/_models/common/table-columns';


@Component({
  selector: 'app-expenses-view',
  templateUrl: './expenses-view.component.html',
  styleUrls: ['./expenses-view.component.css']
})
export class ExpensesViewComponent implements OnInit {

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
    this.loadExpensesList();
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

  private loadExpensesList() {
    this.transactionsService.getTransactions(9).subscribe(
      data => {
        //this.customers  =  data;
        this.dataSource.data = data;
        console.log(data);
      }
    );
  }

}
