import { Routes } from '@angular/router';

import { ExpensesCreateComponent } from './expenses-create/expenses-create.component';
import { ExpensesViewComponent } from './expenses-view/expenses-view.component';

export const ExpenseRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'create',
            component: ExpensesCreateComponent
        },
        {
            path: 'viewAll',
            component: ExpensesViewComponent
        }
        ]
    }
];
