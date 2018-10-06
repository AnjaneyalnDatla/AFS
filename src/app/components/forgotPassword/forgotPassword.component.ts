import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {
	model: any = {};
	loading = false;
    returnVal = false;
    showSuccess = false;

  constructor( private router: Router,
   private authenticationService: AuthenticationService,) { 
  }
  
    //username: new FormControl('');
    //password: new FormControl('');

	//loading = false;
	//returnUrl: string;

  ngOnInit() {
	}  

  resetPassword(){
	 this.showSuccess = true;
  }

  login(){
    this.router.navigate(["login"]);
  }
}