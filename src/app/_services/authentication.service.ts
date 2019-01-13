import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';



@Injectable()
export class AuthenticationService {
    constructor(
        private http: HttpClient
    ) { }

    user:string = '';
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
        if (sessionStorage.getItem('currentUser') != null){
            return JSON.parse(sessionStorage.getItem('currentUser'));
        }
        else{
            return null;
        }
    }
}