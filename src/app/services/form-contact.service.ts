import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormContactService {

  API_url = 'https://reqres.in/api/users'

  constructor( private http: HttpClient ) { }

  sendFormData(formData: FormData) {
    return this.http.post(`${this.API_url}`, formData);
  }
}
