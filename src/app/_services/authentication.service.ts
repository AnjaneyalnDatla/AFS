import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
		// if(username == 'admin' && password == 'admin'){
		// 	return true;
		// }else {
		// 	return false;
		// }
       return this.http.post<any>('http://localhost:8080/identity/validate', { userName: username, password: password })
           .map(user => {
                //login successful if there's a jwt token in the response
               if (user) {
                   //delete user.password;
                    //store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
               }

               return user;
           }); 
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}