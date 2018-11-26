import { Component, Input } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent {

    constructor() { 
    }

    onPrint(){
        window.print();
    }

}