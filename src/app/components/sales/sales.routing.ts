import { Routes } from '@angular/router';

import { SalesCreateComponent } from './sales-create/sales-create.component';
import { SalesViewComponent } from './sales-view/sales-view.component';
import { AppAuthGuard } from '../../app.authguard';

export const SalesRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'create',
            component: SalesCreateComponent,
             data: { roles: ['manage-sales'] }
        },
        {
            path: 'viewAll',
            component: SalesViewComponent,
            data: { roles: ['user'] }
        }]
    }
];
