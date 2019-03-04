import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

// Must import to use Forms functionality  
import { TransactionsService } from '../../../_services/transactions.service';
import { PeriodicElement } from '../../../_models/common/periodicelement';
import { tablecolumns } from 'app/_models/common/table-columns';


@Component({
  selector: 'app-purchases-view',
  templateUrl: './purchases-view.component.html',
  styleUrls: ['./purchases-view.component.css']
})
export class PurchasesViewComponent implements OnInit {

  // Table columns 
  columns = tablecolumns;


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

  toggleOnBack() {
    this.showPurchaseOrder = false;
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
