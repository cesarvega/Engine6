import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../field.interface';
@Component({
  selector: 'app-label',
  template: `
  <div [formGroup]="group" >
  <label [formControlName]="field.name">{{field.label}}</label>
  </div>
`,
  styles: []
})
export class LabelComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit(): void {}
}
