import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
    selector: 'app-privileges',
    templateUrl: './privileges.component.html'
})

export class PrivilegesComponent implements OnInit {

    @Input() privileges: FormGroup;

    privList = [
        { name: 'Dashboard' },
        { name: 'Sales' },
        { name: 'Purchases' },
        { name: 'Expenses' },
        { name: 'Receivables' },
        { name: 'Payments' },
        { name: 'Contacts' },
        { name: 'Accounts' },
        { name: 'Reports' }
    ]

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        console.log(this.privileges)
    }

    ngOnChanges(changes) {

    }

}