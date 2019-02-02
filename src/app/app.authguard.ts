import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KeycloakService } from './keycloak.service';
import { Observable } from 'rxjs';

@Injectable()
export class AppAuthGuard implements CanActivate {
  constructor(public kc: KeycloakService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let userRolesStr = localStorage.getItem('roles');//this.kc.getUserRoles;
    let userRoles = userRolesStr.split(",");
    console.log('role restriction given at app-routing.module for this route', route.data.roles);
    console.log('User roles coming after login from keycloak :', userRoles);
    const requiredRoles = route.data.roles;
    let granted: boolean = false;
    if (!requiredRoles || requiredRoles.length === 0) {
      granted = true;
    } else {
      for (const requiredRole of requiredRoles) {
        if (userRoles.indexOf(requiredRole) > -1) {
          granted = true;
          break;
        }
      }
    }

    if (granted === false) {
      //this.router.navigate(['/']);
      return false;
    } else {
      //this.router.navigate([state.url]);
      return true;
    }
  }
}