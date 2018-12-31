import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ReportsComponent } from '../../reports/reports.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { RoleGuardService as RoleGaurd} from '../../../_gaurds/role-guard.service';
import { PaymentsComponent } from '../../payments/payments.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',                component: DashboardComponent},
    {path: 'sales',
      loadChildren: '../../sales/sales.module#SalesModule'
    },
    { path: 'purchases',
      loadChildren: '../../purchases/purchases.module#PurchasesModule'
    },
    { path: 'payments',                component: PaymentsComponent},
    { path: 'contacts',
      loadChildren: '../../contacts/contacts.module#ContactsModule'
    },
    { path: 'reports',                  component: ReportsComponent },
    { path: 'notifications',            component: NotificationsComponent },
    { path: 'account',
      loadChildren: '../../account/account.module#AccountModule'

    }
];
