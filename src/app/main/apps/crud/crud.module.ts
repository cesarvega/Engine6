import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudItemListComponent } from './crud-item-list/crud-item-list.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path     : '**',
      component: CrudItemListComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrudItemListComponent]
})
export class CrudModule { }
