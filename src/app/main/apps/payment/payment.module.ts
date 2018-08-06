import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { MatFormFieldModule, MatPaginatorModule, MatInputModule, MatTableModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path     : '**',
      component: PaymentComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
  ],
  declarations: [PaymentComponent]
})
export class PaymentModule { }
