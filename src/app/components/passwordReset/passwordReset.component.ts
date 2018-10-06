import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-passwordReset',
  templateUrl: './passwordReset.component.html',
  styleUrls: ['./passwordReset.component.css']
})
export class PasswordResetComponent implements OnInit {
	model: any = {};
	loading = false;
	returnVal = false;

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
	 this.router.navigate(["passwordReset"]);
  }
}