import { QuestionBase } from './question-base';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
export class DatePicker extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
