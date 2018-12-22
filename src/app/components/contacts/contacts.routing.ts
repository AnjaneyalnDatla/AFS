import { Routes } from '@angular/router';

import { ContactsCreateComponent } from './contacts-create/contacts-create.component';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';


export const ContactsRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'create',
            component: ContactsCreateComponent
        },
        {
            path: 'viewAll',
            component: ContactsViewComponent
        }]
    }
];
