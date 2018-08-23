import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldGroupConfig, FieldConfig2 } from './field.interface';


@Component({
  selector: 'dynamic-profile',
  templateUrl: './dynamic-profile.component.html',
  styleUrls: ['./dynamic-profile.component.scss']
})
export class DynamicProfileComponent implements OnInit {
  tabConfig: FieldGroupConfig[];
  @Input() fieldData: any;
  ngOnInit(): void {
    this.tabConfig = this.fieldData;
    setTimeout(() => { window.dispatchEvent(new Event('resize')); }, 20);
  }
}
