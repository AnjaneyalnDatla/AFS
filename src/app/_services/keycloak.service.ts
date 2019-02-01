import { Injectable } from '@angular/core';
declare var Keycloak: any;
@Injectable()
export class KeycloakService {

    private keycloakAuth: any;
    init(): Promise<any> {
     return new Promise((resolve, reject) => {
        const config = {
          'url': 'http://localhost:8090/auth',
          'realm': 'AFS',
          'clientId': 'afs-identity'
        };
        this.keycloakAuth = new Keycloak(config);
        this.keycloakAuth.init({ onLoad: 'login-required' })
          .success(() => {
            resolve();
          })
          .error(() => {
            reject();
          });
        });
    }
    getToken(): string {
      return this.keycloakAuth.token;
    }
}