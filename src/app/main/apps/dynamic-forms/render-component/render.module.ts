import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormsComponent } from '../dynamic-forms.component';
import { MatFormFieldModule, MatPaginatorModule, MatCheckboxModule ,
         MatInputModule, MatTableModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatDividerModule, MatIconModule, MatTabsModule } from '@angular/material';
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
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule
  ],
  declarations: [RenderComponent, DynamicFormQuestionComponent, DynamicFormsComponent ]
})
export class RenderModule { }
