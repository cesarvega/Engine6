import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { Respondents } from '../questions-database/repondents-questionary';
import { DatePicker } from './question-datepicker';
@Injectable()
export class QuestionService {
private url = '';
private questionsClass: any = '';
  constructor(
    private _httpClient: HttpClient
)
{
 // get data from server database
  this._httpClient.get(this.url).subscribe(result => {
  console.log(result);
  });

 this.questionsClass =  Respondents.courses;

}
  
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions(): QuestionBase<any>[] {

    const questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        value: 'Solid',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        type: 'dropdown',
        order: 3
      }),


      new DropdownQuestion({
        key: 'hello',
        label: 'hellory Rating',
        value: 'Solid',
        options: [
          {key: 'red',  value: false},
          {key: 'green',  value: false},
          {key: 'blue',   value: false},
          {key: 'white', value: true}
        ],
        type: 'dropdown',
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new DatePicker({
        key: 'Date',
        label: 'Date',
        value: '10-26-2018',
        required: true,
        type: 'date',
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
