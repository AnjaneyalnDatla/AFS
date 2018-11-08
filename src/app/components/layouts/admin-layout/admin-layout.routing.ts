import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { SalesComponent } from '../../sales/sales.component';
import { PurchasesComponent } from '../../purchases/purchases.component';
import { ContactsComponent } from '../../contacts/contacts.component';
import { ReportsComponent } from '../../reports/reports.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AccountComponent } from '../../account/account.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',                component: DashboardComponent },
    { path: 'sales',                    component: SalesComponent },
    { path: 'purchases',                component: PurchasesComponent },
    { path: 'contacts',                 component: ContactsComponent },
    { path: 'reports',                  component: ReportsComponent },
    { path: 'notifications',            component: NotificationsComponent },
    { path: 'account',                  component: AccountComponent },
];
