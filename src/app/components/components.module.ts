import { FormContactComponent } from './contact/form-contact/form-contact.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
import { LastArticleComponent } from './articles/last-article/last-article.component';
import { MoreArticlesComponent } from './articles/more-articles/more-articles.component';



@NgModule({
  declarations: [
    NewsComponent,
    ContactComponent,
    FormContactComponent,
    ArticlesComponent,
    LastArticleComponent,
    MoreArticlesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsComponent
  ]
})
export class ComponentsModule { }
