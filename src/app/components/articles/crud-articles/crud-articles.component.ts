import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-articles',
  templateUrl: './crud-articles.component.html',
  styleUrls: ['./crud-articles.component.scss']
})
export class CrudArticlesComponent implements OnInit {

  showForm: boolean = false;

  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }

  isLogged = () => this.authService.loggedIn();

  toggleForm() {
    this.showForm = !this.showForm;
  }

}
