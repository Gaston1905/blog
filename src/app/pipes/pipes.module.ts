import { SplitLiveArticlePipe } from './split-live-article.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SplitLiveArticlePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SplitLiveArticlePipe
  ]
})
export class PipesModule { }
