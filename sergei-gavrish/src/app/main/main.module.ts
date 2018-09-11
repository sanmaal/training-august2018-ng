import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLogicComponent } from './main-logic/main-logic.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NgLetModule } from '../shared/directives/ngLet';
import { AuthRoutingModule } from '../auth/auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgLetModule,
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
