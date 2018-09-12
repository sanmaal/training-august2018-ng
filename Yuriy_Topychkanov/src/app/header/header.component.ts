import { Component, OnInit } from '@angular/core';
import { UserFormsService } from "../services/user-forms/user-forms.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  location: string = document.location.pathname;

  constructor(private _formsService: UserFormsService) {
  }

  toggleForm(name) {
    this._formsService.filter(name);
  }

  ngOnInit() {
  }

}
