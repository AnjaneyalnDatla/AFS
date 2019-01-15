import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from '../../../../_services/common.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


declare var $: any;

@Component({
    selector: 'app-accountsform',
    templateUrl: 'accountsform.component.html'
})

export class AccountsFormComponent implements OnInit {

    @Input() accountForm: FormGroup;
    @Input() cardTitle;
    accountTypes: any;
    isAccountTypesLoaded: boolean;
    accountTypeSelected: any;

    constructor(private commonService: CommonService,
        private router: Router) {
    }

    ngOnInit() {
        console.log(this.accountForm.controls.account_type.value);
        this.accountTypeSelected = this.accountForm.controls.account_type.value;
        this.loadAccountsList();
    }

    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
    }

    resetForm() {
        this.accountForm.reset();
      }

    onFormSubmit(form: any) {
        if (this.accountForm.valid) {
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
                    if (form.id === "") {
                        form.id = null;
                    }
                    console.log("contactsform component, FORM ID= " + form.id);
                    console.log("contactsform component, FORM = " + JSON.stringify(form));
                    this.commonService.saveAccount(form).subscribe(
                        data => {
                            this.accountForm.reset();
                            this.router.navigate(["dashboard"]);
                        },
                        error => {
                            alert("Error Saving Account");
                        }
                    );
                }
            })
        }
    }

    /******************************* PRIVATE AREA ***********************************************************/

    private loadAccountsList() {
        this.commonService.getAccountTypes().subscribe(
            data => {
                //this.customers  =  data;
                this.accountTypes = data;
                const defaultSelected = this.accountTypes.find(c => c.id == this.accountTypeSelected.id);
                console.log(defaultSelected);
                this.accountForm.get('account_type').setValue(defaultSelected);
                this.isAccountTypesLoaded = true;
                console.log(data);
            }
        );
    }

}
