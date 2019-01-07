import { Routes } from '@angular/router';

import { UsersCreateComponent } from './users-create/users-create.component';

export const UsersRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'create',
            component: UsersCreateComponent
        }]
    }
];
