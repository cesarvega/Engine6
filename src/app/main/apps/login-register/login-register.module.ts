import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { LoginRegisterComponent } from './login-register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {
    path     : 'auth/login',
      component: LoginRegisterComponent
  } 
  ,
  {
    path     : 'auth/contact',
    component: ContactUsComponent
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
  declarations: [LoginRegisterComponent, ContactUsComponent, ProfileComponent]
})
export class LoginRegisterModule { }
