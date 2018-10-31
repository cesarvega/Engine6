import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { AuthGuard } from './login-register/service/auth-guard.service';
import { AuthGuardService } from './login-register/service/auth.service';

const routes = [
    {
        path: 'login',
        loadChildren: './login-register/login-register.module#LoginRegisterModule'
    },
    {
        path: 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'surveys',
        loadChildren: './surveys/surveys.module#SurveysModule',
        canActivate: [AuthGuard]        
    },    
    {
        path: 'profile',
        loadChildren: './dynamic-profile/dynamic-profile.module#DynamicProfileModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'change-password',
        loadChildren: './login-register/login-register.module#LoginRegisterModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'unsubscribe',
        loadChildren: './login-register/login-register.module#LoginRegisterModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'faq',
        loadChildren: './login-register/login-register.module#LoginRegisterModule',
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'scrumboard',
    //     loadChildren: './scrumboard/scrumboard.module#ScrumboardModule'
    // },
    {
        path: 'crud',
        loadChildren: './crud/crud.module#CrudModule'
    },
    {
        path: 'contacts',
        loadChildren: './contact-us-external/contact-us-external.module#ContactUsExternalModule'
    },      
    {
        path: 'register',
        loadChildren: './dynamic-profile/dynamic-profile.module#DynamicProfileModule'
    },         
    {
        path: '**',
        redirectTo: 'login'
    }
    // {
    //     path: 'dashboards/project',
    //     loadChildren: './dashboards/project/project.module#ProjectDashboardModule'
    // },

    // {
    //     path: 'dynamic-forms',
    //     loadChildren: './dynamic-forms/render-component/render.module#RenderModule'
    // },
    // {
    //     path: 'smart',
    //     loadChildren: './smart/smart.module#SmartModule'
    // },   
    // {
    //     path: 'payment',
    //     loadChildren: './payment/payment.module#PaymentModule'
    // },
    // {
    //     path: 'mail',
    //     loadChildren: './mail/mail.module#MailModule'
    // },
    // {
    //     path: 'mail-ngrx',
    //     loadChildren: './mail-ngrx/mail.module#MailNgrxModule'
    // },
    // {
    //     path: 'chat',
    //     loadChildren: './chat/chat.module#ChatModule'
    // },
    // {
    //     path: 'calendar',
    //     loadChildren: './calendar/calendar.module#CalendarModule'
    // },
    // {
    //     path: 'e-commerce',
    //     loadChildren: './e-commerce/e-commerce.module#EcommerceModule'
    // },
    // {
    //     path: 'academy',
    //     loadChildren: './academy/academy.module#AcademyModule'
    // },
    // {
    //     path: 'todo',
    //     loadChildren: './todo/todo.module#TodoModule'
    // },
    // {
    //     path: 'file-manager',
    //     loadChildren: './file-manager/file-manager.module#FileManagerModule'
    // },
    // {
    //     path: 'contacts',
    //     loadChildren: './contacts/contacts.module#ContactsModule'
    // },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule

    ], providers: [ AuthGuard, AuthGuardService]
})
export class AppsModule {
}
