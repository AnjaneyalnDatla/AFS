import { Routes } from '@angular/router';

import { PurchasesCreateComponent } from './purchases-create/purchases-create.component';
import { PurchasesViewComponent } from './purchases-view/purchases-view.component';

export const PurchasesRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'create',
            component: PurchasesCreateComponent
        },
        {
            path: 'viewAll',
            component: PurchasesViewComponent
        }]
    }
];
