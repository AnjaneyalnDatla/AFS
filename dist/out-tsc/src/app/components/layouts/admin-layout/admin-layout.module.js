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
var admin_layout_routing_1 = require("./admin-layout.routing");
var dashboard_component_1 = require("../../dashboard/dashboard.component");
var sales_component_1 = require("../../sales/sales.component");
var purchases_component_1 = require("../../purchases/purchases.component");
var productandservices_component_1 = require("../../productandservices/productandservices.component");
var contacts_component_1 = require("../../contacts/contacts.component");
var reports_component_1 = require("../../reports/reports.component");
var notifications_component_1 = require("../../notifications/notifications.component");
var account_component_1 = require("../../account/account.component");
var material_1 = require("@angular/material");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(admin_layout_routing_1.AdminLayoutRoutes),
                forms_1.FormsModule,
                material_1.MatButtonModule,
                material_1.MatRippleModule,
                material_1.MatInputModule,
                material_1.MatTooltipModule,
                material_1.MatCheckboxModule,
                material_1.MatOptionModule,
                material_1.MatSelectModule,
                material_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatTableModule,
                ng2_charts_1.ChartsModule,
                material_1.MatMenuModule,
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                sales_component_1.SalesComponent,
                purchases_component_1.PurchasesComponent,
                productandservices_component_1.ProductsAndServicesComponent,
                contacts_component_1.ContactsComponent,
                reports_component_1.ReportsComponent,
                notifications_component_1.NotificationsComponent,
                account_component_1.AccountComponent,
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());
exports.AdminLayoutModule = AdminLayoutModule;
//# sourceMappingURL=admin-layout.module.js.map