"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var login_layout_routing_1 = require("./login-layout.routing");
var login_component_1 = require("../../login/login.component");
var registration_component_1 = require("../../registration/registration.component");
var passwordReset_component_1 = require("../../passwordReset/passwordReset.component");
var forgotPassword_component_1 = require("../../forgotPassword/forgotPassword.component");
var material_1 = require("@angular/material");
var LoginLayoutModule = /** @class */ (function () {
    function LoginLayoutModule() {
    }
    LoginLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(login_layout_routing_1.LoginLayoutRoutes),
                forms_1.FormsModule,
                material_1.MatButtonModule,
                material_1.MatRippleModule,
                material_1.MatInputModule,
                material_1.MatTooltipModule,
                material_1.MatCheckboxModule,
                material_1.MatMenuModule,
            ],
            declarations: [
                login_component_1.LoginComponent,
                registration_component_1.RegistrationComponent,
                passwordReset_component_1.PasswordResetComponent,
                forgotPassword_component_1.ForgotPasswordComponent,
            ]
        })
    ], LoginLayoutModule);
    return LoginLayoutModule;
}());
exports.LoginLayoutModule = LoginLayoutModule;
//# sourceMappingURL=login-layout.module.js.map