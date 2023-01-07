import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { FormContactComponent } from './contact/form-contact/form-contact.component';



@NgModule({
  declarations: [
    NewsComponent,
    ContactComponent,
    FormContactComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NewsComponent
  ]
})
export class ComponentsModule { }
