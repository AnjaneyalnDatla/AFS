import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactsService } from '../../../../_services/contacts.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../../../../_services/upload-file.service';

@Component({
    selector: 'app-contactsform',
    templateUrl: 'contactsform.component.html'
})

export class ContactsFormComponent {

    @Input() contactForm: FormGroup;
    @Input() cardTitle;

    files: any = [];
    filesToUpload = [];
    selectedFiles: FileList;
    progress: { percentage: number } = { percentage: 0 };

    constructor(private contactsService: ContactsService,
        private router: Router,
        private uploadFileService: UploadFileService) {
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
                if (this.selectedFiles != undefined && this.selectedFiles.length > 0) {
                    Array.from(this.selectedFiles).forEach(sf => {
                        var file: any = {};
                        file.documentName = sf.name;
                        this.files.push(file);
                    });
                }
                this.contactsService.saveContact(form).subscribe(
                    data => {
                        console.log(data.id);
                        if (this.selectedFiles != undefined && this.selectedFiles.length > 0) {
                            this.uploadFileService.pushFileToContactStorage(this.selectedFiles, data.id).subscribe(event => {
                                if (event.type === HttpEventType.UploadProgress) {
                                    this.progress.percentage = Math.round(100 * event.loaded / event.total);
                                } else if (event instanceof HttpResponse) {
                                    console.log('File is completely uploaded!');

                                }
                                //});
                            });
                        }
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


    selectFile(event) {
        this.selectedFiles = event.target.files;
        Array.from(this.selectedFiles).forEach(sf => {
            console.log(sf.name);
        });
    }

}
