import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/user';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
    constructor(
        private http: HttpClient
    ) { }

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
            if (response) {
                localStorage.setItem('currentUser', JSON.stringify(response));
            }
            return response;
        })
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}