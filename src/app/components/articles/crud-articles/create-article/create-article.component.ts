import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {

  title: string = '';
  substitle: string = '';
  contentArticle: string = '';
  form!: FormGroup;
  maxWords = 10;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      substitle: new FormControl(''),
      contentArticle: new FormControl('')
    })
  }

}
