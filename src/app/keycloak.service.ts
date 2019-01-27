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
        'url': 'http://localhost:8085/auth',
        'realm': 'SRKR',
        'clientId': 'srkrapp',
        "credentials": {
          "secret": "65859d5a-cd9e-4cc3-82ac-d7087eed82cb"
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