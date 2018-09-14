import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InfiniteScrollDirective } from './directives/infinite-scroll/infinite-scroll.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [InfiniteScrollDirective],
  exports: [
    InfiniteScrollDirective,
  ]
})
export class SharedModule { }
