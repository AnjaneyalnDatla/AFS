"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var http_2 = require("@angular/common/http");
var app_routing_1 = require("./app.routing");
var components_module_1 = require("./components/components.module");
var app_component_1 = require("./app.component");
var material_1 = require("@angular/material");
var core_2 = require("@agm/core");
var admin_layout_component_1 = require("./components/layouts/admin-layout/admin-layout.component");
var login_layout_component_1 = require("./components/layouts/login-layout/login-layout.component");
var authentication_service_1 = require("./_services/authentication.service");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                components_module_1.ComponentsModule,
                router_1.RouterModule,
                app_routing_1.AppRoutingModule,
                material_1.MatInputModule,
                material_1.MatCheckboxModule,
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                }),
                ng2_charts_1.ChartsModule,
                http_2.HttpClientModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                admin_layout_component_1.AdminLayoutComponent,
                login_layout_component_1.LoginLayoutComponent,
            ],
            providers: [authentication_service_1.AuthenticationService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map