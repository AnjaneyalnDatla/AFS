import { Routes } from '@angular/router';

import { LoginComponent } from '../../login/login.component';
import { RegistrationComponent } from '../../registration/registration.component';
import { PasswordResetComponent } from '../../passwordReset/passwordReset.component';
import { ForgotPasswordComponent } from '../../forgotPassword/forgotPassword.component';

export const LoginLayoutRoutes: Routes = [
    { path: 'login',      component: LoginComponent },
    { path: 'register',   component: RegistrationComponent},
    { path: 'passwordReset', component: PasswordResetComponent},
    { path: 'forgotPassword', component: ForgotPasswordComponent},
];
