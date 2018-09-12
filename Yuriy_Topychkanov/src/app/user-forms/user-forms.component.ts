import { Component, OnInit } from '@angular/core';
import { UserFormsService } from "../services/user-forms/user-forms.service";

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: [ './user-forms.component.scss' ],
})
export class UserFormsComponent implements OnInit {
  showRegistrationForm: boolean = false;
  showLoginForm: boolean = false;
  formOverlayIsShown: boolean = false;
  showingNow: string;

  constructor(private _formsService: UserFormsService) {
    this._formsService.listen().subscribe((formName: string) => {
      this.showFormOverlay(formName);
    })
  }

  showFormOverlay(formName) {
    this.formOverlayIsShown = true;
    this.showForm(formName);
  }

  hideFormOverlay(event, formName) {
    if (event.target.id === 'form-overlay') {
      this.formOverlayIsShown = false;
      this.hideForm(formName);
    }
  }

  showForm(formName) {
    this[ `show${formName}Form` ] = true;
    this.showingNow = formName;
  }

  hideForm(formName) {
    this[ `show${formName}Form` ] = false;
    this.showingNow = '';
  }

  ngOnInit() {
  }


}
