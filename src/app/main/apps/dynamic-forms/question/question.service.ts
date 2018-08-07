import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
@Injectable()
export class QuestionService {

  constructor(
    private _httpClient: HttpClient
)
{

  this._httpClient.get('./BI_objects.json').subscribe(result => {
  console.log(result);
  
  });

}
  
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions(): QuestionBase<any>[] {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new TextboxQuestion({
        key: 'emailAddres',
        label: 'Email',
        type: 'email',
        order
        : 2
      }),

      new TextboxQuestion({
        key: 'emailAddrs',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new TextboxQuestion({
        key: 'emailAddr',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new TextboxQuestion({
        key: 'emailAd',
        label: 'Email',
        type: 'email',
        order: 2
      })

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
