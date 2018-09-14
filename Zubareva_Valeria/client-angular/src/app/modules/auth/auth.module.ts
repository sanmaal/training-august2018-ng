import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AuthService } from './sevices/auth/auth.service';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './sevices/auth-guard/auth-guard.service';


@NgModule({
  providers: [AuthService, AuthGuardService],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [
    SignupComponent
  ],
  declarations: [SignupComponent, LoginComponent]
})
export class AuthModule { }
