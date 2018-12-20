import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ContactsComponent } from '../../contacts/contacts.component';
import { ReportsComponent } from '../../reports/reports.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AccountComponent } from '../../account/account.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',                component: DashboardComponent },
    {path: 'sales',
      loadChildren: '../../sales/sales.module#SalesModule'
    },
    { path: 'purchases',
      loadChildren: '../../purchases/purchases.module#PurchasesModule'
    },
    { path: 'contacts',                 component: ContactsComponent },
    { path: 'reports',                  component: ReportsComponent },
    { path: 'notifications',            component: NotificationsComponent },
    { path: 'account',                  component: AccountComponent },
];
