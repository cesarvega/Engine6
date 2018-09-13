import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysComponent } from './surveys.component';
import { MatFormFieldModule, MatPaginatorModule, MatInputModule, MatTableModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path     : '**',
      component: SurveysComponent
  }
];

@NgModule({
  declarations: [SurveysComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class SurveysModule { }
