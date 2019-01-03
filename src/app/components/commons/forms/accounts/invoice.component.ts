import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TransactionsService } from '../../../../_services/transactions.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnInit {

    @Input() transactionNumber: any;
    displayData: any;
    isLoaded: boolean = false;
    subTotal: number = 0;
    total: number = 0;
    tax: number = 0;
    totalUnitPrice: number = 0;

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

    calculateTotals() {
        for (let lineItem of this.displayData.lineItems) {
            this.totalUnitPrice = 0;
            this.totalUnitPrice += lineItem.quantity * lineItem.price;
            this.subTotal += this.totalUnitPrice;
        }
        this.total = this.subTotal + this.tax;

    }
    onPrint() {
        window.print();
    }

    openPdf() {
        var data = document.getElementById('contentToConvert');
        html2canvas(data).then(canvas => {
            // Few necessary setting options 
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;

            const contentDataURL = canvas.toDataURL('image/png')
            let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
            pdf.save('invoice.pdf'); // Generated PDF  
        });
    }

    displayInvoice(val) {

    }

    getSale(transactionNumber) {
        //transactionNumber = 77;
        console.log("EVENT");
        console.log(transactionNumber);
        this.transactionsService.getSale(transactionNumber).subscribe(
            data => {
                console.log(data);
                this.displayData = data;
                console.log(this.displayData);
                //this.calculateTotals();
                this.isLoaded = true;
            }
        );
    }

    goBack() {
        this.onBackClick.emit();
        //   if(this.displayData.transactionType.name == 'Invoice'){
        //     this.router.navigate(["/sales/create"]);
        //   }
    }

}