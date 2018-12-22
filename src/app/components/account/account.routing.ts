import { Routes } from '@angular/router';

import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountViewComponent } from './account-view/account-view.component';


export const AccountRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'create',
            component: AccountCreateComponent
        },
        {
            path: 'viewAll',
            component: AccountViewComponent
        }]
    }
];
