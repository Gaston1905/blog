import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient,
               private route: Router
              ) {
                this.currentSubject = new BehaviorSubject<any>(
                  JSON.parse(sessionStorage.getItem('currentUser') || '{}')
                );
              }

  API_url = 'https://reqres.in/api/login';
  currentSubject!: BehaviorSubject<any>;
  parcero: boolean | undefined;

  logged(data: any) {
    return this.http.post(`${this.API_url}`, data).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentSubject.next(data);
        this.parcero = true;
        return data;
      })
    )
  }

  loggedIn() {
    return !!sessionStorage.getItem('currentUser');
  }

  loggedUser() {
    return this.currentSubject.value;
  }

  logoutUser() {
    this.parcero = false;
    sessionStorage.clear();
    this.currentSubject.next(null)
    this.route.navigate(['/home'])
  }
}
