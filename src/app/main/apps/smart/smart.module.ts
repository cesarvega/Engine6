import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartComponent } from './smart.component';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { DynamicProfileComponent } from '../dynamic-profile/dynamic-profile.component';
import { InputComponent } from '../dynamic-profile/components/input/input.component';
import { ButtonComponent } from '../dynamic-profile/components/button/button.component';
import { SelectComponent } from '../dynamic-profile/components/select/select.component';
import { DateComponent } from '../dynamic-profile/components/date/date.component';
import { RadiobuttonComponent } from '../dynamic-profile/components/radiobutton/radiobutton.component';
import { CheckboxComponent } from '../dynamic-profile/components/checkbox/checkbox.component';
import { LabelComponent } from '../dynamic-profile/textlabel/textlabel.component';
import { DynamicFieldDirective } from '../dynamic-profile/components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from '../dynamic-profile/components/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MaterialModule } from '../dynamic-profile/material.module';
import { DynamicProfileModule } from '../dynamic-profile/dynamic-profile.module';

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
    MaterialModule,
    // ReactiveFormsModule,
    // FormsModule,
    FuseSharedModule,
    DynamicProfileModule
  ],
  declarations:   [
    // SmartComponent,
    // DynamicProfileComponent
  ],

})
export class SmartModule { }
