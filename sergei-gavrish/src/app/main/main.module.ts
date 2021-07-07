import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLogicComponent } from './main-logic/main-logic.component';
import { MainViewComponent } from './main-view/main-view.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  declarations: [
    MainLogicComponent,
    MainViewComponent,
  ],
  exports: [
    MainLogicComponent,
  ]
})
export class MainModule { }
