import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsersList(){
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

}
