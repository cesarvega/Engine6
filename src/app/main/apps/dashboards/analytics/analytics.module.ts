import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { AnalyticsDashboardComponent } from 'app/main/apps/dashboards/analytics/analytics.component';
import { AnalyticsDashboardService } from 'app/main/apps/dashboards/analytics/analytics.service';
import { AuthGuard } from '../../login-register/service/auth-guard.service';
import { AuthService } from '../../login-register/service/auth.service';


const routes: Routes = [
    {
        path     : 'g',
        component: AnalyticsDashboardComponent,
        resolve  : {
            data: AnalyticsDashboardService
        },
        canActivateChild: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        AnalyticsDashboardComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTabsModule,

        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),
        ChartsModule,
        NgxChartsModule,

        FuseSharedModule,
        FuseWidgetModule
    ],
    providers   : [
        AnalyticsDashboardService, AuthGuard, AuthService
    ]
})
export class AnalyticsDashboardModule
{
}

