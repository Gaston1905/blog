import { ComponentsModule } from './../components/components.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HeroComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class SharedModule { }
