import { Component } from '@angular/core';

import { QuestionService } from '../question/question.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-forms [questions]="questions"></app-dynamic-forms>
    </div>
  `,
  providers:  [QuestionService]
})
export class RenderComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
