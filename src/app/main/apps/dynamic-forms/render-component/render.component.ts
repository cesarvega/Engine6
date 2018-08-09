import { Component } from '@angular/core';

import { QuestionService } from '../question/question.service';

@Component({
  selector: 'app-root',
  templateUrl: 'render.html',
  providers:  [QuestionService]
})
export class RenderComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
