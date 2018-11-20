import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ContactsService {

    constructor(
        private http: HttpClient,
    ) { }

    getContactList() {
        let url = `${environment.account_contextroot}` + `${environment.contact_list}`
        
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

    saveContact(contactForm: any) {
        let url = `${environment.account_contextroot}` + `${environment.contact_save_url}`
        let isCom = false;
        if(contactForm.isCompany == 'vendor'){
            isCom = true;
        }
        let contact = {
            isCompany: isCom,
            supplementalId: contactForm.supplementalId,
            companyName: contactForm.companyName,
            firstName: contactForm.firstName,
            middleName: contactForm.middleName,
            lastName: contactForm.lastName,
            cellPhone: contactForm.cellPhone,
            homePhone: contactForm.homePhone,
            faxNumber: contactForm.faxNumber,

            //temporarily assigning primary email to email field
            emailAddress: contactForm.primaryEmail,
            
            streetAddress: contactForm.address.streetAddress,
            city: contactForm.address.city,
            state: contactForm.address.state,
            country: contactForm.address.country,
            postalCode: contactForm.address.postalCode,
            landMark: contactForm.address.landMark,
            additionalComments: contactForm.additionalComments,
            idType: contactForm.idType,
            idNumber: contactForm.idNumber,
            designation: contactForm.designation

        }
        return this.http.post<any>(url, contact, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

}