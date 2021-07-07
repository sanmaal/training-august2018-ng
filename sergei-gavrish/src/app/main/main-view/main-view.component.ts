import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
  @Input() isLoggedIn: boolean;
  @Output() logoutClick: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  logout(): void {
    this.logoutClick.emit();
  }

}
