import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private KeycloakService: KeycloakService
    ) { }

    organizationDetails: Array<Object> = new Array<Object>();
    userRoles = {};
    isApproverVar: boolean= false;

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

    isApprover() {
        this.userRoles = this.KeycloakService.getUserRoles();
        this.isApproverVar = JSON.stringify(this.userRoles).includes("approve");
        return this.isApproverVar;
    }
}