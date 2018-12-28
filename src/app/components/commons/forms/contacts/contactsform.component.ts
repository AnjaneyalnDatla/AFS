import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactsService } from '../../../../_services/contacts.service';
declare var $: any;

@Component({
    selector: 'app-contactsform',
    templateUrl: 'contactsform.component.html'
})

export class ContactsFormComponent {

    @Input() contactForm;
    @Input() cardTitle;

    constructor(private contactsService: ContactsService) {
    }

    onFormSubmit(form: any) {
        form.current_balance = this.contactForm.current_balance;
        console.log("Inside contactsform component = " + JSON.stringify(form));
        this.contactsService.saveContact(form).subscribe(
            data => {
                alert("Contact Saved");
                this.contactForm.reset();
            },
            error => {
                alert("Error Saving contact");
            }
        );
    }
}
