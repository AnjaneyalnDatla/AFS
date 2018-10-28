import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

declare var $: any;

@Component({
    selector: 'app-contactsform',
    templateUrl: 'contactsform.component.html'
})

export class ContactsFormComponent {

    @Input() contactForm;
    @Input() cardTitle;

    constructor() { 
    }
}
