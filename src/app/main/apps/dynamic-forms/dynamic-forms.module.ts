import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormsComponent } from './dynamic-forms.component';
import { MatFormFieldModule, MatPaginatorModule, MatInputModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path     : '**',
      component: DynamicFormsComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [DynamicFormsComponent]
})
export class DynamicFormsModule { }
