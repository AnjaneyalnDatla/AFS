import { Routes } from '@angular/router';

import { ReceivablesCreateComponent } from './receivables-create/receivables-create.component';
import { ReceivablesViewComponent } from './receivables-view/receivables-view.component';

export const ReceivablesRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'create',
            component: ReceivablesCreateComponent
        },
        {
            path: 'viewAll',
            component: ReceivablesViewComponent
        }
        ]
    }
];
