import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatIconModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { LoginRegisterComponent } from './login-register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { GoodbayComponent } from './goodbay/goodbay.component';
import { SuccessfulPasswordResetComponent } from './successful-password-reset/successful-password-reset.component';
import { ForgotPasswordThankyouComponent } from './forgot-password-thankyou/forgot-password-thankyou.component';
import { FaqComponent } from './faq/faq.component';
import { FaqService } from './faq/faq.service';
const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginRegisterComponent
  }
  ,
  {
    path: 'contact-us',
    component: ContactUsComponent
  }
  ,
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'thankyou',
    component: ThankyouComponent
  },
  {
    path: 'unsubscribe',
    component: UnsubscribeComponent
  },
  {
    path: 'faq',
    component: FaqComponent,
    resolve  : {
      faq: FaqService
  }
  },
  {
    path: 'successful-password-reset',
    component: SuccessfulPasswordResetComponent
  },
  {
    path: 'forgot-password-success',
    component: ForgotPasswordThankyouComponent
  },
  {
    path: 'goodbay',
    component: GoodbayComponent
  },
  {
      path: '**',
      redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    
    MatExpansionModule,
    MatIconModule,

    FuseSharedModule
  ],
  declarations: [LoginRegisterComponent,
    ContactUsComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    UnsubscribeComponent,
    ThankyouComponent,
    GoodbayComponent,
    SuccessfulPasswordResetComponent,
    ForgotPasswordThankyouComponent,
    FaqComponent
  ],
  providers   : [
      FaqService
  ]
})
export class LoginRegisterModule { }
