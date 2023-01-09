import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  API_url = 'https://reqres.in/api/login'

  logged(data: any) {
    return this.http.post(`${this.API_url}`, data);
  }
}
