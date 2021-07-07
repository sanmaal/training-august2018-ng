import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
  ]
})
export class AppMaterialModule { }
