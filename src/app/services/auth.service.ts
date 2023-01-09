import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient,
               private route: Router
              ) { }

  API_url = 'https://reqres.in/api/login';
  parcero: boolean | undefined;

  logged(data: any) {
    this.parcero = true;
    return this.http.post(`${this.API_url}`, data);

  }

  loggedIn() {
    return this.parcero;
  }

  logoutUser() {
    this.parcero = false;
    this.route.navigate(['/home'])
  }
}
