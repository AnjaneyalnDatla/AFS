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
    this.authenticationService.login(this.model.username, this.model.password).subscribe(
      data => {
        sessionStorage.setItem('currentUser',JSON.stringify(data));
        this.router.navigate(["dashboard"]);
      },
      error => {
      alert("Invalid credentials");
      this.loading = false;
      }
    );
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