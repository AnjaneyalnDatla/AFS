import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnVal = false;

  constructor(private router: Router,
    private authenticationService: AuthenticationService, ) {
  }

  ngOnInit() {
  }

  login() {
    //this.returnVal = this.authenticationService.login(this.model.username, this.model.password);
    
    this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate(["dashboard"]);
                },
                error => {
                   // this.alertService.error(error);
                   alert("Invalid credentials");
                    this.loading = false;
                });
    
    // if (this.returnVal) {
    //   this.router.navigate(["dashboard"]);
    // } else {
    //   alert("Invalid credentials");
    //   this.loading = false;
    // }
  }
  regClick() {
    this.router.navigate(["register"]);
  }

  resetPassword(){
    this.router.navigate(["passwordReset"]);
   }

   forgotPassword(){
    this.router.navigate(["forgotPassword"]);
   }
}