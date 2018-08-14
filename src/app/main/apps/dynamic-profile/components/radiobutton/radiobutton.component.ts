import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
@Component({
  selector: 'app-radiobutton',
  template: `
<div class="demo-full-width margin-top" [formGroup]="group">
<label class="radio-label-padding">{{field.label}}:</label><br><br>
<mat-radio-group [formControlName]="field.name">
<mat-radio-button class="p-24" *ngFor="let item of field.options" [value]="item">{{item}}</mat-radio-button>
</mat-radio-group><br><br>
</div>
`,
  styles: []
})
export class RadiobuttonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit(): void {}
}
