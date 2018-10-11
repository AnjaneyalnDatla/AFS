"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("../../login/login.component");
var registration_component_1 = require("../../registration/registration.component");
var passwordReset_component_1 = require("../../passwordReset/passwordReset.component");
var forgotPassword_component_1 = require("../../forgotPassword/forgotPassword.component");
exports.LoginLayoutRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: registration_component_1.RegistrationComponent },
    { path: 'passwordReset', component: passwordReset_component_1.PasswordResetComponent },
    { path: 'forgotPassword', component: forgotPassword_component_1.ForgotPasswordComponent },
];
//# sourceMappingURL=login-layout.routing.js.map