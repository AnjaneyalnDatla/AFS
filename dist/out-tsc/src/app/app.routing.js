"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var admin_layout_component_1 = require("./components/layouts/admin-layout/admin-layout.component");
var login_layout_component_1 = require("./components/layouts/login-layout/login-layout.component");
//import { LoginComponent } from './login/login.component';
var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: login_layout_component_1.LoginLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './components/layouts/login-layout/login-layout.module#LoginLayoutModule'
            },
        ]
    },
    {
        path: '',
        component: admin_layout_component_1.AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './components/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map