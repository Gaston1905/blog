import { PipesModule } from './../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContactComponent } from './contact/form-contact/form-contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
import { LastArticleComponent } from './articles/last-article/last-article.component';
import { MoreArticlesComponent } from './articles/more-articles/more-articles.component';
import { CrudArticlesComponent } from './articles/crud-articles/crud-articles.component';
import { CreateArticleComponent } from './articles/crud-articles/create-article/create-article.component';

import { SplitLiveArticlePipe } from './../pipes/split-live-article.pipe';

@NgModule({
  declarations: [
    NewsComponent,
    ContactComponent,
    FormContactComponent,
    ArticlesComponent,
    LastArticleComponent,
    MoreArticlesComponent,
    CrudArticlesComponent,
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule
  ],
  providers: [
    SplitLiveArticlePipe
  ],
  exports: [
    NewsComponent
  ]
})
export class ComponentsModule { }
