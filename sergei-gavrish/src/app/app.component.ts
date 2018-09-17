import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-main-logic></app-main-logic>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'sergei-gavrish';
}
