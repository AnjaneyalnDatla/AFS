"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../../_services/authentication.service");
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
        core_1.Component({
            selector: 'app-passwordReset',
            templateUrl: './passwordReset.component.html',
            styleUrls: ['./passwordReset.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            authentication_service_1.AuthenticationService])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());
exports.PasswordResetComponent = PasswordResetComponent;
//# sourceMappingURL=passwordReset.component.js.map