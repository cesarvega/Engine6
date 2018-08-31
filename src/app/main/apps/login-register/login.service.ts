import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': ''
    })
  };
  private SP_verifyUser = '[BI_MEMBERS].[dbo].[pm_verify_username_and_password] ';
  private _SP_verifyUserEmail = '[BI_MEMBERS].[dbo].[pm_verify_username] ';
  private _SP_verifyIfRegistered = '[BI_MEMBERS].[dbo].[pm_verify_ifregistered] ';
  private _SP_verifyUserPassword = '[RESPONDENTS].[dbo].[pm_verify_password] ';
  private _SP_verifyUsersFirstAndLastName = '[RESPONDENTS].[dbo].[pm_verify_VERIFY_FIRST_N_LASTNAME] ';
  private _SP_verifyDOB = '[RESPONDENTS].[dbo].[pm_verify_DOB] ';
  private _SP_verifyCellPhone = '[RESPONDENTS].[dbo].[pm_verify_CELLPHONE] ';

  private _SP_saveUserProfile = '[BI_MEMBERS].[dbo].[pm_updProfile] ';
  private _SP_getUserProfile = '[BI_MEMBERS].[dbo].[pm_GETProfile] ';

  protected API_URL = 'https://tools.brandinstitute.com/BIWebServices/' + 'api/BiFormCreator/';
  
  constructor(private httpClient: HttpClient) {}

 // get  all Users 
  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}`);
  }

  // get User by id
  getUser(id: string): Observable<any> {
    const url = `${this.API_URL}/edit/${id}`;
    return this.httpClient.get(url);
  }

   // poner nuevo User 
  postUser(data: any): Observable<any> {
    const bodyString = JSON.stringify(this._SP_getUserProfile + '\'' + data + '\'');
    const url = `${this.API_URL}`;
    return this.httpClient.post(url, bodyString, this.httpOptions);
  }

  // update Users by id 
  // remplazar any por el tipo de variable para esto creamos un modeloose aun clase que represente eld ata que vamos update
  updateUser(id: string,  data: any): Observable<any> {
    const url = `${this.API_URL}/update/${id}`;
    return this.httpClient.post(url, data);
  }

  // borrar appoinmnets 
  deleteUser(id: string): Observable<{}> {
    const url = `${this.API_URL}/delete/${id}`;
    return this.httpClient.get(url);
  }

  signAndRegistrationAuth(data: any): Observable<any> {
    const bodyString = JSON.stringify(this.SP_verifyUser + data);
    const url = `${this.API_URL}`;
    return this.httpClient.post(url, bodyString, this.httpOptions);
  }






}

