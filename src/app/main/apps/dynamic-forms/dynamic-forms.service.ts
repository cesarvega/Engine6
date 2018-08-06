import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DynamicFormsService {
  
  protected API_URL = 'nodeapp-jjzwzwzcwk.now.sh';

  constructor(private httpClient: HttpClient) {}

 // get  all Questions 
  getQuestions(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}`);
  }
  
  // get Question by id
  getQuestion(id: string): Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get(url);
  }
  
  
   // poner nuevo Question 
  postQuestion(data): Observable<any> {
    return this.httpClient.post(this.API_URL, data);
  }
  
  
  // update Questions by id 
  updateQuestion(data): Observable<any> {
    return this.httpClient.put(this.API_URL, data);
  }
  
  
  // borrar appoinmnets 
  deleteQuestion(id: string): Observable<{}> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete(url);
  }
}
