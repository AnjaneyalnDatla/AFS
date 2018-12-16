import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class TransactionsService {
    constructor(
        private http: HttpClient,
    ) { }

    /** List of Sales  */
    getAllSales() {
        let url = `${environment.account_contextroot}` + `${environment.transactions_resource}`
        
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

    /** Get specific sale by Id */
    getSale(transactionId){
        let url = `${environment.account_contextroot}` + `${environment.sale_get_url}` + '/' +transactionId
        console.log(JSON.stringify(transactionId));
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

    /** Get LineItems for a sale*/
    getLineItems(transactionId){
        let url = `${environment.account_contextroot}` + `${environment.sale_lineItems_url}`+ '/' +transactionId
        console.log(JSON.stringify(transactionId));
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

    /** Get Unique transaction number for a sale*/
    getTransactionNumber(){
        let url = `${environment.account_contextroot}` + `${environment.transactions_resource}` + '/transactionNumber/new';
        return this.http.get<any>(url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

    /** Save Sale */
    saveSale(formData){
        let url = `${environment.account_contextroot}` + `${environment.transactions_resource}`
        console.log(JSON.stringify(formData))
        return this.http.post<any>(url, JSON.stringify(formData), {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        })
    }

    /** Delete Sale */
    deleteSale(transactionId){

    }
    

}