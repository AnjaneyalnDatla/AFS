import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnInit {
    @Input() invoiceData: any;
    subTotal: number;
    total: number;
    tax: number;
    totalUnitPrice : number;

    constructor() { 
    }

    ngOnInit() {
        this.calculateTotals();
    }

    calculateTotals(){
        for (let lineItem of this.invoiceData.lineItems) {
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