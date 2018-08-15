import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../field.interface';
@Component({
  selector: 'app-label',
  template: `
<mat-form-field class="p-24"  [formGroup]="group">
<label>{{field.label}}:</label><br><br>
</mat-form-field>
`,
  styles: []
})
export class LabelComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit(): void {}
}
