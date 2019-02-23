import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';


@Injectable()
export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private KeycloakService: KeycloakService
    ) { }

    user: string = '';
    organizationDetails: Array<Object> = new Array<Object>();

    login(username: string, password: string) {
        let url = `${environment.identity_contextroot}` + `${environment.identity_validate_url}`
        let user = {
            userName: username,
            password: password,
        }
        return this.http.post<any>(url, user, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            // if (response) {
            //     sessionStorage.setItem('currentUser', JSON.stringify(response));
            // }
            return response;
        }).catch((error: any) => {
            return throwError(error);
        });
    }

    logout() {
        // remove user from local storage to log user out
        console.log("logout");
        sessionStorage.clear();
    }

    getLoginUser() {
        if (sessionStorage.getItem('currentUser') != null) {
            return JSON.parse(sessionStorage.getItem('currentUser'));
        }
        else {
            return null;
        }
    }
    
    getUserGroups() {
        let _keycloakInst = this.KeycloakService.getKeycloakInstance();
        console.log('Keycloak: ' + JSON.stringify(_keycloakInst.idTokenParsed['group']));
        let userGrpArry: Array<String> = _keycloakInst.idTokenParsed['group'];

        userGrpArry.forEach(org => {
            let orgArry: Array<String> = org.split(":");
            let organization = { organizationName: orgArry[0].replace('/', ''), organizationId: orgArry[1] };
            this.organizationDetails.push(organization);
        });
        return this.organizationDetails;

    }
}