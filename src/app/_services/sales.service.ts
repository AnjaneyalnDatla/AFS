import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class SalesService {
    constructor(
        private http: HttpClient,
    ) { }

    getVendorList() {
        let url = `${environment.sale_contextroot}` + `${environment.sale_vendor_list_url}`
        
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

    getCustomerList() {
        let url = `${environment.sale_contextroot}` + `${environment.sale_vendor_list_url}`
        
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

    getProductTypes() {
        let url = `${environment.sale_contextroot}` + `${environment.sale_vendor_list_url}`
        
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

}