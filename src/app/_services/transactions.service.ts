import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';
import { ServiceUtil } from '../_helpers/serviceutil';


@Injectable()
export class TransactionsService {
    constructor(
        private http: HttpClient,
        private serviceUtil: ServiceUtil
    ) { }

    /** List of Sales  */
    getTransactions(transctionTypeId) {
        let url = `${environment.account_contextroot}` + `${environment.transactions_resource}` + '?transactionType=' + transctionTypeId + '&orgCode=' + this.serviceUtil.getGroupCode();

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

    /** Get specific sale by Id */
    getSale(transactionId) {
        let url = `${environment.account_contextroot}` + 'transactions/transactionNumber/' + transactionId + '/?orgCode=' + this.serviceUtil.getGroupCode();
        console.log(JSON.stringify(transactionId));
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

    /** Get LineItems for a sale*/
    getLineItems(transactionId) {
        let url = `${environment.account_contextroot}` + 'transactions/lineItems/' + transactionId + + '/?orgCode=' + this.serviceUtil.getGroupCode();
        console.log(JSON.stringify(transactionId));
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

    /** Get Unique transaction number for a sale*/
    getTransactionByTransactionNumber(transactionNumber) {
        let url = `${environment.account_contextroot}` + `${environment.transactions_resource}` + '/transactionNumber/' + transactionNumber + '/?orgCode=' + this.serviceUtil.getGroupCode();
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

    /** Save Transaction */
    saveTransaction(formData) {
        let url = `${environment.account_contextroot}` + `${environment.transactions_resource}`
        console.log(JSON.stringify(formData))
        return this.http.put<any>(url, JSON.stringify(formData), {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        }).catch((error: any) => {
            return throwError(error);
        });
    }

    /** Save Transaction */
    saveDocumentsMetaDataOnTransaction(formData) {
        let url = `${environment.account_contextroot}` + `${environment.transactions_resource}` + `/documents`
        console.log(JSON.stringify(formData))
        return this.http.put<any>(url, JSON.stringify(formData), {
            headers: {
                "Content-Type": "application/json"
            }
        }).map(response => {
            return response;
        }).catch((error: any) => {
            return throwError(error);
        });
    }

    /** Save Transaction */
    updateTransaction(formData) {
        let url = `${environment.account_contextroot}` + `${environment.transactions_resource}`
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

    /** Delete Sale */
    deleteSale(transactionId) {

    }


}