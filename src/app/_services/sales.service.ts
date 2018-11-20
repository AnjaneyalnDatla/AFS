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

   

    getCustomerList() {
        let url = `${environment.account_contextroot}` + `${environment.sale_vendor_list_url}`
        
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

    getProductTypes() {
        let url = `${environment.account_contextroot}` + `${environment.sale_vendor_list_url}`
        
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

    saveSales() {
        let url = `${environment.account_contextroot}` + `${environment.sales_resource}`
        
        return this.http.post<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

    getAllSales() {
        let url = `${environment.account_contextroot}` + `${environment.sales_resource}`
        
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }
    
    saveSale(formData){
        let url = `${environment.account_contextroot}` + `${environment.sales_resource}`
        console.log(JSON.stringify(formData))
        return this.http.post<any>(url, JSON.stringify(formData), {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

}