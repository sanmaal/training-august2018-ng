import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { RegistrationFormComponent } from "../registration-form/registration-form.component";
import { LoginFormComponent } from "../login-form/login-form.component";
import { UserFormsComponent } from './user-forms.component';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    RegistrationFormComponent,
    LoginFormComponent,
    UserFormsComponent,
  ],
  exports: [
    UserFormsComponent
  ]
})
export class UserFormsModule {
}
