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
        console.log("Inside contactsform component" + this.contactForm.companyName);
        console.log("Inside contactsform component" + form.companyName);
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
