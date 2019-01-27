import { Injectable } from '@angular/core';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  public keycloakAuth: any;

  constructor() { }

  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const config = {
        'url': 'http://localhost:8090/auth',
        'realm': 'AFS',
        'clientId': 'afs-identity',
        "credentials": {
          "secret": "5a932b57-9618-4530-acbe-77f6a4e821fb"
        }
      };
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth.init({onLoad: 'login-required'})
        .success(() => {
          resolve();
        })
        .error(() => {
          reject();
        });
      });
  }

  getToken(): string {
    console.log(this.keycloakAuth.token)
    return this.keycloakAuth.token;
  }

  login(){
    this.keycloakAuth.login().success(function(authenticated) {
      alert(authenticated ? 'authenticated' : 'not authenticated');
  }).error(function() {
      alert('failed to initialize');
  });
  }
}