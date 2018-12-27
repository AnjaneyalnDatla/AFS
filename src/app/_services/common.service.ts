import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/user';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonService {

    constructor(
        private http: HttpClient
    ) { }

    getProductTypes() {
        let url = `${environment.account_contextroot}` + `${environment.products_resource}`
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

    getAccounts(): Observable<any> {
        console.log("CALLING")
        let url = `${environment.account_contextroot}` + `${environment.accounts_resource}`
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            console.log(response);
            return response;
        })
    }
}