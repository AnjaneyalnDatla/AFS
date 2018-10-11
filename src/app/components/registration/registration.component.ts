import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	model: any = {};
	loading = false;
	returnVal = false;

  constructor( private router: Router,
   private authenticationService: AuthenticationService,) { 
  }

  ngOnInit() {
	}  

  loginClick(){
	 this.router.navigate(["login"]);
  }

  registration(){
    
  }
}