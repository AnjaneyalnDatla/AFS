import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactsService } from '../../../../_services/contacts.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../../../../_services/upload-file.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-contactsform',
    templateUrl: 'contactsform.component.html'
})

export class ContactsFormComponent {
    address: any[] = [
        {
            country: 'India', states: [
                { state: 'Andhra Pradesh', cities: ['Vijayawada', 'Visakhapatnam'] },
                { state: 'Telangana', cities: ['Hyderabad', 'Warangal'] }
            ]
        },
        {
            country: 'USA', states: [
                { state: 'Washington', cities: ['Seattle', 'Spokane'] },
                { state: 'Virginia', cities: ['Virginia Beach', 'Norfolk'] }
            ]
        }
    ];
    countrySelected = 'India';
    stateSelected = 'Andhra Pradesh';
    states = [];
    cities = [];
    index = 0;
    idType = ['Aadhar card', 'Passport', 'Driving License', 'Voter Id'];
    @Input() contactForm: FormGroup;
    @Input() cardTitle;

    files: any = [];
    filesToUpload = [];
    selectedFiles: FileList;
    progress: { percentage: number } = { percentage: 0 };

    constructor(private contactsService: ContactsService,
        private router: Router,
        private toastr: ToastrService,
        private uploadFileService: UploadFileService) {
        this.getStates();
        this.getCities();
    }

    onFormSubmit(form: any) {
        if (this.contactForm.valid) {
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
                                        this.toastr.info('Contact saved successfully ', 'Success', {
                                            timeOut: 3000,
                                            progressBar: true
                                        });
                                    }
                                    //});
                                });
                            } else {
                                this.toastr.info('Contact saved successfully ', 'Success', {
                                    timeOut: 3000,
                                    progressBar: true
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
    }


    selectFile(event) {
        this.selectedFiles = event.target.files;
        Array.from(this.selectedFiles).forEach(sf => {
            console.log(sf.name);
        });
    }

    resetForm() {
        this.contactForm.reset();
    }

    getStates() {
        this.address.forEach(address => {
            if (address.country == this.countrySelected) {
                let i = 0;
                address.states.forEach(element => {
                    this.states[i++] = element.state;
                });
            }
        });
        this.cities = [];
    }

    getCities() {
        this.address.forEach(address => {
            if (address.country == this.countrySelected) {
                address.states.forEach(element => {
                    if (element.state == this.stateSelected) {
                        this.cities = element.cities;
                    }
                });
            }
        });
    }


}
