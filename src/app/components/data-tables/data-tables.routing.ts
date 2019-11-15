import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
// Components
import { CompleteTableComponent } from '@app/components/data-tables/index';

export const dataTablesRouting: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'complete-table',
                pathMatch: 'full'
            },
            {
                path: 'complete-table',
                component: CompleteTableComponent,
                data: {
                    title: 'Data tables',
                    icon: 'table_chart',
                    urls: [
                        { title: 'Complete table' }
                    ]
                }
            }
        ]
    }
];

@NgModule({
    declarations: [
        CompleteTableComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(dataTablesRouting)
    ],
    exports: [RouterModule]
})
export class DataTablesRoutingModule { }
