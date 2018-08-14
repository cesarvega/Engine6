import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
// import { SurveysModule } from './surveys/surveys.module';

const routes = [
    {
        path: 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
    },
    {
        path: 'dashboards/project',
        loadChildren: './dashboards/project/project.module#ProjectDashboardModule'
    },
    {
        path: 'surveys',
        loadChildren: './surveys/surveys.module#SurveysModule'
    },
    {
        path: 'dynamic-forms',
        loadChildren: './dynamic-forms/render-component/render.module#RenderModule'
    },
    {
        path: 'smart',
        loadChildren: './smart/smart.module#SmartModule'
    },
    {
        path: 'dynamic-profile',
        loadChildren: './dynamic-profile/dynamic-profile.module#DynamicProfileModule'
    },
    {
        path: 'payment',
        loadChildren: './payment/payment.module#PaymentModule'
    },
    {
        path: 'mail',
        loadChildren: './mail/mail.module#MailModule'
    },
    {
        path: 'mail-ngrx',
        loadChildren: './mail-ngrx/mail.module#MailNgrxModule'
    },
    {
        path: 'chat',
        loadChildren: './chat/chat.module#ChatModule'
    },
    {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    },
    {
        path: 'e-commerce',
        loadChildren: './e-commerce/e-commerce.module#EcommerceModule'
    },
    {
        path: 'academy',
        loadChildren: './academy/academy.module#AcademyModule'
    },
    {
        path: 'todo',
        loadChildren: './todo/todo.module#TodoModule'
    },
    {
        path: 'file-manager',
        loadChildren: './file-manager/file-manager.module#FileManagerModule'
    },
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
    },
    {
        path: 'scrumboard',
        loadChildren: './scrumboard/scrumboard.module#ScrumboardModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule
        
    ]
})
export class AppsModule {
}
