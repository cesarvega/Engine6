import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormsComponent } from '../dynamic-forms.component';
import { MatFormFieldModule, MatPaginatorModule, MatInputModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';
import { RenderComponent } from '../render-component/render.component';
const routes: Routes = [
  {
    path     : '**',
      component: RenderComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  declarations: [RenderComponent, DynamicFormsComponent, DynamicFormQuestionComponent]
})
export class RenderModule { }
