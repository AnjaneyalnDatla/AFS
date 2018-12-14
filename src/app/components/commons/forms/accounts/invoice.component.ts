import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnInit {
    @Input() invoiceData: any;
    subTotal: number = 0;
    total: number = 0;
    tax: number = 0;
    totalUnitPrice : number = 0;

    @Output() calculate = new EventEmitter();

    constructor() { 
    }

    ngOnInit() {
        this.calculateTotals();
    }

    ngOnChanges(changes) {
        //this.calculateTotals();
      }

    calculateTotals(){
        for (let lineItem of this.invoiceData.lineItems) {
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

}