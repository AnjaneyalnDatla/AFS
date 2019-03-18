import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUsersList() {
        let url = `${environment.keycloak_contextroot}` + `${environment.keycloak_resource}`;
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        }).catch((error: any) => {
            return throwError(error);
        });
    }

    getRoles() {
        let url = `${environment.keycloak_contextroot}` + `${environment.keycloak_resource}`+'/roles';
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        }).catch((error: any) => {
            return throwError(error);
        });
    }

    getOrganizations() {
        let url = `${environment.keycloak_contextroot}` + `${environment.keycloak_resource}`+'/groups';
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        }).catch((error: any) => {
            return throwError(error);
        });
    }   

    createUser(formData) {
        let url = `${environment.keycloak_contextroot}` + `${environment.keycloak_resource}`;
        console.log(JSON.stringify(formData))
        return this.http.post<any>(url, JSON.stringify(formData), {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        }).catch((error: any) => {
            return throwError(error);
        });
    }

    updateUser(formData) {
        let url = `${environment.keycloak_contextroot}` + `${environment.keycloak_resource}`+'/update';
        console.log(JSON.stringify(formData))
        return this.http.post(url, JSON.stringify(formData), {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        }).catch((error: any) => {
            return throwError(error);
        });
    }

    getUserById(id){
        let url = `${environment.keycloak_contextroot}` + `${environment.keycloak_resource}` + '/id'+ '?userId=' +id ;
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        }).catch((error: any) => {
            return throwError(error);
        });
    }
}
