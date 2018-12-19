import { Routes } from '@angular/router';

import { SalesCreateComponent } from './sales-create/sales-create.component';
import { SalesViewComponent } from './sales-view/sales-view.component';
import { SalesEditComponent } from './sales-edit/sales-edit.component';

export const SalesRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'create',
            component: SalesCreateComponent
        },
        {
            path: 'viewAll',
            component: SalesViewComponent
        },
        {
            path: 'edit',
            component: SalesEditComponent
        }]
    }
];
