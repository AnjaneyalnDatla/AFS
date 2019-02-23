
// not using this service. Delete this later

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
        'url': 'https://68.183.156.146:8443/auth',
        'realm': 'AFS',
        'clientId': 'afs-identity'
      };
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth.init({ onLoad: 'login-required' })
        .success(() => {
          resolve();
          this.getParsedToken();
          this.getUserDetails();
          this.getUserRoles();
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

  getParsedToken() {
    console.log(JSON.stringify(this.keycloakAuth.tokenParsed))
  }

  getUserRoles() {
    let realmAccess = this.keycloakAuth.realmAccess;
    console.log(realmAccess.roles);

    localStorage.setItem("roles", realmAccess.roles);
  }

  public isAuthenticated(): boolean {
    return this.keycloakAuth.isAuthenticated;
  }


  getUserDetails() {
    this.keycloakAuth.loadUserInfo().success(function (userInfo) {
      console.log(userInfo);
      return userInfo.preferred_username;
    }).error(function () {
      console.log('Failed to load user info');
    });
  }

  logout() {
    return this.keycloakAuth.logout();
  }



}