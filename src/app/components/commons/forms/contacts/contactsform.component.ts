import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactsService } from '../../../../_services/contacts.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
    selector: 'app-contactsform',
    templateUrl: 'contactsform.component.html'
})

export class ContactsFormComponent {

    @Input() contactForm: FormGroup;
    @Input() cardTitle;

    constructor(private contactsService: ContactsService,
        private router: Router) {
    }

    onFormSubmit(form: any) {
        swal({
            title: 'Wish to continue?',
            text: "Once confirmed, the action is irreversible",
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Save',
            buttonsStyling: false
        }).then((result) => {
            if (result.value) {
                console.log("contactsform component, FORM ID= " + form.id);
                console.log("contactsform component, FORM = " + JSON.stringify(form));
                this.contactsService.saveContact(form).subscribe(
                    data => {
                        this.contactForm.reset();
                        this.router.navigate(["dashboard"]);
                    },
                    error => {
                        alert("Error Saving contact");
                    }
                );
            }
        })
    }
}
