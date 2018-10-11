"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("../../dashboard/dashboard.component");
var sales_component_1 = require("../../sales/sales.component");
var purchases_component_1 = require("../../purchases/purchases.component");
var productandservices_component_1 = require("../../productandservices/productandservices.component");
var contacts_component_1 = require("../../contacts/contacts.component");
var reports_component_1 = require("../../reports/reports.component");
var notifications_component_1 = require("../../notifications/notifications.component");
var account_component_1 = require("../../account/account.component");
exports.AdminLayoutRoutes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'sales', component: sales_component_1.SalesComponent },
    { path: 'purchases', component: purchases_component_1.PurchasesComponent },
    { path: 'productandservices', component: productandservices_component_1.ProductsAndServicesComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'reports', component: reports_component_1.ReportsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'account', component: account_component_1.AccountComponent },
];
//# sourceMappingURL=admin-layout.routing.js.map