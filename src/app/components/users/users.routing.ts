import { Routes } from '@angular/router';

import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersViewComponent } from './users-view/users-view.component';

export const UsersRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'create',
            component: UsersCreateComponent
        },{
            path: 'view',
            component: UsersViewComponent
        }
    ]
    }
];
