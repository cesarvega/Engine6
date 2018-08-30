import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { LoginRegisterComponent } from './login-register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
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
    path: 'unsubscribe',
    component: UnsubscribeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,

    FuseSharedModule
  ],
  declarations: [LoginRegisterComponent,
    ContactUsComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    UnsubscribeComponent
  ]
})
export class LoginRegisterModule { }
