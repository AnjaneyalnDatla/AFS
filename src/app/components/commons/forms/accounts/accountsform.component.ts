import { Component, Input } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-accountsform',
    templateUrl: 'accountsform.component.html'
})

export class AccountsFormComponent {

    @Input() cardTitle

    constructor() { 
    }
}
