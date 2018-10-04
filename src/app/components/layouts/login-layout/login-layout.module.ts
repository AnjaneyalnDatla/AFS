import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginLayoutRoutes } from './login-layout.routing';
import { LoginComponent } from '../../login/login.component';
import { RegistrationComponent } from '../../registration/registration.component';
import { PasswordResetComponent } from '../../passwordReset/passwordReset.component';
import { ForgotPasswordComponent } from '../../forgotPassword/forgotPassword.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatCheckboxModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
	  MatCheckboxModule,
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    PasswordResetComponent,
    ForgotPasswordComponent,
  ]
})

export class LoginLayoutModule {}
