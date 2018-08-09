import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { QuestionControlService } from './question/question-control.service';
import { QuestionBase } from './question/question-base';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
  providers: [ QuestionControlService ]
})
export class DynamicFormsComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
 
  constructor(private qcs: QuestionControlService) {  }
 
  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions);
  }
 
  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
