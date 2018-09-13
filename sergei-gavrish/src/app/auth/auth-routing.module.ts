import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInUpComponent } from './sign-in-up/sign-in-up.component';

const routes: Routes = [
  {
    path: 'signIn', component: SignInUpComponent, data: { form: 'signIn' }
  },
  {
    path: 'signUp', component: SignInUpComponent, data: { form: 'signUp' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
