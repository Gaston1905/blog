import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  data: string = '';

  constructor( public authService: AuthService ) {

  }

  isLogged = () => this.authService.loggedIn();

  ngOnInit(): void {
  }



}
