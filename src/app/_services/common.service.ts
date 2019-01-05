import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';

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
        }).catch((error: any) => {
            return throwError(error);
        });
    }

    getAccounts(): Observable<any> {
        let url = `${environment.account_contextroot}` + `${environment.accounts_resource}`
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            console.log(response);
            return response;
        }).catch((error: any) => {
            return throwError(error);
        });
    }

    getAccountById(accountId): Observable<any> {
        let url = `${environment.account_contextroot}` + `${environment.accounts_resource}`+`/id/`+ accountId
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            console.log(response);
            return response;
        }).catch((error: any) => {
            return throwError(error);
        });
    }

    getAccountTypes(): Observable<any> {
        console.log("CALLING")
        let url = `${environment.account_contextroot}` + `${environment.accounts_resource}`+`/accountTypes`
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            console.log(response);
            return response;
        }).catch((error: any) => {
            return throwError(error);
        });
    }

    saveAccount(formData){
        let url = `${environment.account_contextroot}` + `${environment.accounts_resource}`
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
}