import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TransactionsService } from '../../../../_services/transactions.service';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnInit {
    
    @Input() transactionNumber: any;
    displayData: any;
    isLoaded:boolean = false;
    subTotal: number = 0;
    total: number = 0;
    tax: number = 0;
    totalUnitPrice : number = 0;

    @Output() calculate = new EventEmitter();
    @Output() onBackClick = new EventEmitter();


    constructor(private transactionsService: TransactionsService) { 
       
    }

    ngOnInit() {
        this.getSale(this.transactionNumber);
    }

    ngOnChanges(changes) {
        console.log(JSON.stringify(this.displayData))
        //this.calculateTotals();
      }

    calculateTotals(){
        for (let lineItem of this.displayData.lineItems) {
            this.totalUnitPrice = 0;
            this.totalUnitPrice += lineItem.quantity * lineItem.price;
            this.subTotal += this.totalUnitPrice; 
        }
        this.total = this.subTotal + this.tax;
            
    }
    onPrint(){
        window.print();
    }

    openPdf(){        
    }

    displayInvoice(val){

    }

    getSale(transactionNumber) {
        //transactionNumber = 77;
        console.log("EVENT");
        console.log(transactionNumber);
        this.transactionsService.getSale(transactionNumber).subscribe(
          data => {
            console.log(data);
            this.displayData = data[0];
            this.calculateTotals();
            this.isLoaded = true;
          }
        );
      }

      goBack(){
        this.onBackClick.emit();
        //   if(this.displayData.transactionType.name == 'Invoice'){
        //     this.router.navigate(["/sales/create"]);
        //   }
      }

}