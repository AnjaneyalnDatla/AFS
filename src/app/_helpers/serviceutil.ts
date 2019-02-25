import { Injectable } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class ServiceUtil {

    constructor(
        private authenticationService: AuthenticationService
    ) { }

    getGroupCode() {
        return JSON.parse(JSON.stringify(this.authenticationService.getUserGroups().slice(0, 1)[0])).organisationCode;
    }
    getGroupName(){
        return JSON.parse(JSON.stringify(this.authenticationService.getUserGroups().slice(0, 1)[0])).organizationName;
    }
}