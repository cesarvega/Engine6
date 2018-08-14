import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartComponent } from './smart.component';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
const routes: Routes = [
  {
    path     : '**',
      component: SmartComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FuseSharedModule
  ],
  declarations: [SmartComponent]
})
export class SmartModule { }
