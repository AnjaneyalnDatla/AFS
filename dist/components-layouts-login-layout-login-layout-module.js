(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-layouts-login-layout-login-layout-module"],{

/***/ "./src/app/components/forgotPassword/forgotPassword.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/forgotPassword/forgotPassword.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    height: 100%;\n    position: relative;\n    align-content: center;\n    z-index: 1;\n    justify-content: center;\n  }\n  \n  .card{\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 90px;\n    margin-left: auto;\n    margin-right: auto;\n    top: -90px;\n    -webkit-animation-name: card;\n    animation-name: card;\n    -webkit-animation-duration: 600ms;\n    animation-duration: 600ms;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n  \n  @-webkit-keyframes card {\n    from {top: -40px;}\n    to {top: 0;}\n  }\n  \n  @keyframes card {\n    from {top: -40px;}\n    to {top: 0;}\n  }\n  \n  .card-header{\n    position: relative;\n    overflow: hidden;\n    top: -40px;\n    width: 100%;\n    padding: 25px;\n    border-radius: 3px;\n    background: linear-gradient(60deg, #78dfec, #79aab396);\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.678), 0 7px 10px -5px rgba(217, 225, 228, 0.4);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .card-header h4{\n    font-weight: 400;\n    color: rgb(22, 1, 1);\n    margin-bottom: 25px;\n    margin-top: 5px;\n  }\n  \n  .form-row, .card-form, .mat-input-container{\n    width: 100%;\n  }\n  \n  .card-form{\n    padding: 5px;\n  }\n  \n  .form-row{\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin-top: 13px;\n  }\n  \n  .form-row i{\n    position: relative;\n    top: -5px;\n    margin-right: 15px;\n    color: #555;\n  }\n  \n  .form-row button{\n    margin-left: 40px;\n    background: #78dfec;\n    color: rgb(22, 1, 1);;\n  }\n  \n  .footer button{\n    background: #78dfec;\n    color: rgb(22, 1, 1);;\n  }\n  \n  .card-footer{\n    margin: 10px;\n  }\n  \n  .card-footer button{\n    color: #0a324996;\n    border: #555;\n  }\n  \n  .fontSuccess{\n      font-weight: bold !important;\n      color: #4caf50 !important;\n  }"

/***/ }),

/***/ "./src/app/components/forgotPassword/forgotPassword.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgotPassword/forgotPassword.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"background\"></div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\"></div>\n            <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\"></div>\n            <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n                <form class=\"passReset-form\" name=\"form\" #f=\"ngForm\" novalidate>\n                    <div class=\"card content card-panel\">\n                        <div class=\"card-header\">\n                            <h4>Forgot your password?</h4>\n                            \n                        </div>\n                        <div class=\"card-form\">\n                            <div class=\"form-row\">\n                                <i class=\"material-icons\">email</i>\n                                <mat-input-container color=\"accent\">\n                                    <input type=\"email\" matInput placeholder=\"Enter Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" />\n                                </mat-input-container>\n                            </div>\n                            <!-- <div class=\"form-row\">\n                                <i class=\"material-icons\">lock_outline</i>\n                                <mat-input-container color=\"accent\">\n                                    <input type=\"password\" matInput placeholder=\"Confirm Password\" name=\"confirmPass\" [(ngModel)]=\"model.confirmPass\" #confirmPass=\"ngModel\" />\n                                </mat-input-container>\n                            </div> -->\n                            \n                        </div>\n                        <div class=\"form-row\">\n                           \n                            <button mat-raised-button (click)=\"resetPassword();\" [disabled]=\"showSuccess\">Submit</button>\n                            <button mat-raised-button (click)=\"login();\" >Back</button>\n                           \n                        </div>\n                        <div class=\"fontSuccess\" [hidden]=\"!showSuccess\">\n                            Check your email for password reset instructions.\n                          </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/forgotPassword/forgotPassword.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/forgotPassword/forgotPassword.component.ts ***!
  \***********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.returnVal = false;
        this.showSuccess = false;
    }
    //username: new FormControl('');
    //password: new FormControl('');
    //loading = false;
    //returnUrl: string;
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.resetPassword = function () {
        this.showSuccess = true;
    };
    ForgotPasswordComponent.prototype.login = function () {
        this.router.navigate(["login"]);
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotPassword',
            template: __webpack_require__(/*! ./forgotPassword.component.html */ "./src/app/components/forgotPassword/forgotPassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotPassword.component.css */ "./src/app/components/forgotPassword/forgotPassword.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/layouts/login-layout/login-layout.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/layouts/login-layout/login-layout.module.ts ***!
  \************************************************************************/
/*! exports provided: LoginLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutModule", function() { return LoginLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-layout.routing */ "./src/app/components/layouts/login-layout/login-layout.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _passwordReset_passwordReset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../passwordReset/passwordReset.component */ "./src/app/components/passwordReset/passwordReset.component.ts");
/* harmony import */ var _forgotPassword_forgotPassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../forgotPassword/forgotPassword.component */ "./src/app/components/forgotPassword/forgotPassword.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LoginLayoutModule = /** @class */ (function () {
    function LoginLayoutModule() {
    }
    LoginLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_login_layout_routing__WEBPACK_IMPORTED_MODULE_4__["LoginLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
                _passwordReset_passwordReset_component__WEBPACK_IMPORTED_MODULE_7__["PasswordResetComponent"],
                _forgotPassword_forgotPassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"],
            ]
        })
    ], LoginLayoutModule);
    return LoginLayoutModule;
}());



/***/ }),

/***/ "./src/app/components/layouts/login-layout/login-layout.routing.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/layouts/login-layout/login-layout.routing.ts ***!
  \*************************************************************************/
/*! exports provided: LoginLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutRoutes", function() { return LoginLayoutRoutes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _passwordReset_passwordReset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../passwordReset/passwordReset.component */ "./src/app/components/passwordReset/passwordReset.component.ts");
/* harmony import */ var _forgotPassword_forgotPassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forgotPassword/forgotPassword.component */ "./src/app/components/forgotPassword/forgotPassword.component.ts");




var LoginLayoutRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationComponent"] },
    { path: 'passwordReset', component: _passwordReset_passwordReset_component__WEBPACK_IMPORTED_MODULE_2__["PasswordResetComponent"] },
    { path: 'forgotPassword', component: _forgotPassword_forgotPassword_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"] },
];


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    height: 100%;\n    position: relative;\n    align-content: center;\n    z-index: 1;\n    justify-content: center;\n  }\n  \n  .card{\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 90px;\n    margin-left: auto;\n    margin-right: auto;\n    top: -90px;\n    -webkit-animation-name: card;\n    animation-name: card;\n    -webkit-animation-duration: 600ms;\n    animation-duration: 600ms;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n  \n  @-webkit-keyframes card {\n    from {top: -40px;}\n    to {top: 0;}\n  }\n  \n  @keyframes card {\n    from {top: -40px;}\n    to {top: 0;}\n  }\n  \n  .card-header{\n    position: relative;\n    overflow: hidden;\n    top: -40px;\n    width: 100%;\n    padding: 25px;\n    border-radius: 3px;\n    background: linear-gradient(60deg, #78dfec, #79aab396);\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.678), 0 7px 10px -5px rgba(217, 225, 228, 0.4);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .card-header h4{\n    font-weight: 400;\n    color: rgb(22, 1, 1);\n    margin-bottom: 25px;\n    margin-top: 5px;\n  }\n  \n  .form-row, .card-form, .mat-input-container{\n    width: 100%;\n  }\n  \n  .card-form{\n    padding: 5px;\n  }\n  \n  .form-row{\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin-top: 13px;\n  }\n  \n  .form-row i{\n    position: relative;\n    top: -5px;\n    margin-right: 15px;\n    color: #555;\n  }\n  \n  .form-row button{\n    margin-left: 40px;\n    /* background: linear-gradient(60deg,  #7796a596, #79aab396); */\n    background: #78dfec;\n    color: rgb(22, 1, 1);;\n  }\n  \n  .footer button{\n    /* background: #77AF44; */\n    background: #78dfec;\n    color: rgb(22, 1, 1);\n  }\n  \n  .card-footer{\n    margin: 10px;\n  }\n  \n  .card-footer button{\n    color: #0a324996;\n    border: #555;\n  }\n  \n  .pswd-text{\n    float: right;\n    padding-bottom: 5px;\n    margin-left: 18%;\n    color: #3b8a98 !important;\n    font-weight: 400;\n    font-size: 14px;\n    cursor: pointer;\n  }  \n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"background\"></div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\"></div>\n            <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\"></div>\n            <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n                <form class=\"login-form\" name=\"form\" #f=\"ngForm\" novalidate>\n                    <div class=\"card content card-panel\">\n                        <div class=\"card-header\">\n                            <h4>Welcome</h4>\n                            \n                        </div>\n                        <div class=\"card-form\">\n                            <div class=\"form-row\">\n                                <i class=\"material-icons\">face</i>\n                                <mat-input-container color=\"accent\">\n                                    <input type=\"text\" matInput placeholder=\"User Name\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" />\n                                </mat-input-container>\n                            </div>\n                            <div class=\"form-row\">\n                                <i class=\"material-icons\">lock_outline</i>\n                                <mat-input-container color=\"accent\">\n                                    <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" />\n                                </mat-input-container>\n                            </div>\n                            <div class=\"form-row\">\n                                <mat-checkbox><span style=\"color:black\">Remember me</span></mat-checkbox>\n                                <span class=\"pswd-text\"><a (click)=\"forgotPassword();\">Forgot password?</a></span>\n                            </div>\n                            \n                        </div>\n                        <!-- <div class=\"footer\">\n                           \n                            <button mat-raised-button primary (click)=\"login();\">Login</button>\n                            <button mat-raised-button ((click)=\"regClick();\">Register</button>\n                           \n                        </div> -->\n                        <div class=\"footer\">\n                            <button mat-raised-button (click)=\"login();\">Login</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.returnVal = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.model.username, this.model.password).subscribe(function (data) {
            _this.router.navigate(["dashboard"]);
        }, function (error) {
            alert("Invalid credentials");
            _this.loading = false;
        });
    };
    LoginComponent.prototype.regClick = function () {
        this.router.navigate(["register"]);
    };
    LoginComponent.prototype.resetPassword = function () {
        this.router.navigate(["passwordReset"]);
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.router.navigate(["forgotPassword"]);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/passwordReset/passwordReset.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/passwordReset/passwordReset.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    height: 100%;\n    position: relative;\n    align-content: center;\n    z-index: 1;\n    justify-content: center;\n  }\n  \n  .card{\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 90px;\n    margin-left: auto;\n    margin-right: auto;\n    top: -90px;\n    -webkit-animation-name: card;\n    animation-name: card;\n    -webkit-animation-duration: 600ms;\n    animation-duration: 600ms;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n  }\n  \n  @-webkit-keyframes card {\n    from {top: -40px;}\n    to {top: 0;}\n  }\n  \n  @keyframes card {\n    from {top: -40px;}\n    to {top: 0;}\n  }\n  \n  .card-header{\n    position: relative;\n    overflow: hidden;\n    top: -40px;\n    width: 100%;\n    padding: 25px;\n    border-radius: 3px;\n    background: linear-gradient(60deg, #d4e2e796, #79aab396);\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.678), 0 7px 10px -5px rgba(217, 225, 228, 0.4);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .card-header h4{\n    font-weight: 400;\n    color: rgb(22, 1, 1);\n    margin-bottom: 25px;\n    margin-top: 5px;\n  }\n  \n  .form-row, .card-form, .mat-input-container{\n    width: 100%;\n  }\n  \n  .card-form{\n    padding: 5px;\n  }\n  \n  .form-row{\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin-top: 13px;\n  }\n  \n  .form-row i{\n    position: relative;\n    top: -5px;\n    margin-right: 15px;\n    color: #555;\n  }\n  \n  .form-row button{\n    margin-left: 40px;\n    background: linear-gradient(60deg,  #7796a596, #79aab396);\n    color: rgb(22, 1, 1);;\n  }\n  \n  .footer button{\n    background: linear-gradient(60deg,  #7796a596, #79aab396);\n    color: rgb(22, 1, 1);;\n  }\n  \n  .card-footer{\n    margin: 10px;\n  }\n  \n  .card-footer button{\n    color: #0a324996;\n    border: #555;\n  }"

/***/ }),

/***/ "./src/app/components/passwordReset/passwordReset.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/passwordReset/passwordReset.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"background\"></div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\"></div>\n            <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n                <form class=\"passReset-form\" name=\"form\" #f=\"ngForm\" novalidate>\n                    <div class=\"card content card-panel\">\n                        <div class=\"card-header\">\n                            <h4>Reset Password</h4>\n                            \n                        </div>\n                        <div class=\"card-form\">\n                            <div class=\"form-row\">\n                                <i class=\"material-icons\">lock_outline</i>\n                                <mat-input-container color=\"accent\">\n                                    <input type=\"password\" matInput placeholder=\"New Password\" name=\"newPass\" [(ngModel)]=\"model.newPass\" #newPass=\"ngModel\" />\n                                </mat-input-container>\n                            </div>\n                            <div class=\"form-row\">\n                                <i class=\"material-icons\">lock_outline</i>\n                                <mat-input-container color=\"accent\">\n                                    <input type=\"password\" matInput placeholder=\"Confirm Password\" name=\"confirmPass\" [(ngModel)]=\"model.confirmPass\" #confirmPass=\"ngModel\" />\n                                </mat-input-container>\n                            </div>\n                            \n                        </div>\n                        <div class=\"footer button\">\n                           \n                            <button mat-raised-button (click)=\"resetPassword();\">Submit</button>\n                           \n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/passwordReset/passwordReset.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/passwordReset/passwordReset.component.ts ***!
  \*********************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.returnVal = false;
    }
    //username: new FormControl('');
    //password: new FormControl('');
    //loading = false;
    //returnUrl: string;
    PasswordResetComponent.prototype.ngOnInit = function () {
    };
    PasswordResetComponent.prototype.resetPassword = function () {
        this.router.navigate(["passwordReset"]);
    };
    PasswordResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passwordReset',
            template: __webpack_require__(/*! ./passwordReset.component.html */ "./src/app/components/passwordReset/passwordReset.component.html"),
            styles: [__webpack_require__(/*! ./passwordReset.component.css */ "./src/app/components/passwordReset/passwordReset.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/registration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration-page {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    position: relative;\n    .content {\n        z-index: 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        .app-name {\n            margin-top: 0px;\n            padding-bottom: 10px;\n            font-size: 32px;\n        }\n        .registration-form {\n            padding: 40px;\n            background: #fff;\n            width: 500px;\n            box-shadow: 0 0 10px #ddd;\n            input:-webkit-autofill {\n                -webkit-box-shadow: 0 0 0 30px white inset;\n            }\n        }\n    }\n\n    &:after {\n        content: '';\n        background: #fff;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 50%;\n        right: 0;\n    }\n    &:before {\n        content: '';\n        background: #3f51b5;\n        position: absolute;\n        top: 50%;\n        left: 0;\n        bottom: 0;\n        right: 0;\n    }\n}\n.text-center {\n    text-align: center;\n}\n.w-100 {\n    width: 100%;\n}\n.card-panel{\n\ttransition: box-shadow .25s;\n    padding: 20px;\n    margin: 0.5rem 0 1rem 0;\n    border-radius: 2px;\n    background-color: #fff;\n}"

/***/ }),

/***/ "./src/app/components/registration/registration.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration-page\">\n    <div class=\"content card-panel\">\n        <form class=\"registration-form\" name=\"form\" (ngSubmit)=\"f.form.valid && registration()\" #f=\"ngForm\" novalidate>\n            <div class=\"text-center\">\n                <h2 class=\"app-name\">Registration</h2>\n            </div>\n            <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n                <div fxFlexFill>\n                    <mat-form-field class=\"w-100\">\t\t\t\t\t\n                        <input matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\">\n                    </mat-form-field>\n                </div>\n            </div>\n\t\t\t<div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n                <div fxFlexFill>\n                    <mat-form-field class=\"w-100\">\t\t\t\t\t\n                        <input matInput placeholder=\"User Name\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\">\n                    </mat-form-field>\n                </div>\n            </div>\n\t\t\t<div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n                <div fxFlexFill>\n                    <mat-form-field class=\"w-100\">\n                        <input matInput type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\n                    </mat-form-field>\n                </div>\n            </div>\n\t\t\t<div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n                <div fxFlexFill>\n                    <mat-form-field class=\"w-100\">\n                        <input matInput type=\"password\" placeholder=\"Retype Password\" name=\"repassword\" [(ngModel)]=\"model.repassword\" #repassword=\"ngModel\">\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n                <div fxFlexFill>\n                    <button mat-raised-button color=\"primary\" class=\"w-100\">Register</button>\n                </div>\n            </div>\n\t\t\t<br>\n\t\t\t<div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n                <div fxFlexFill>\n                    <button mat-raised-button color=\"primary\" class=\"w-100\" (click)=\"loginClick();\">Login</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.returnVal = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.loginClick = function () {
        this.router.navigate(["login"]);
    };
    RegistrationComponent.prototype.registration = function () {
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/components/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-layouts-login-layout-login-layout-module.js.map