import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudItemComponent } from './crud-item.component';
import { CrudListItemComponent } from './crud-list-item/crud-list-item.component';
import { CrudDetailItemComponent } from './crud-detail-item/crud-detail-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CrudItemComponent, CrudListItemComponent, CrudDetailItemComponent]
})
export class CrudItemModule { }
