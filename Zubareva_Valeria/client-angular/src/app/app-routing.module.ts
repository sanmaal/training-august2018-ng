import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { AllPokemonsListComponent } from './modules/pokemons/components/all-pokemons-list/all-pokemons-list.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { PokemonPageComponent } from './modules/pokemons/components/pokemon-page/pokemon-page.component';
import { UsersPokemonsListComponent } from './modules/pokemons/components/users-pokemons-list/users-pokemons-list.component';
import { AuthGuardService } from './modules/auth/sevices/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'all-pokemons', pathMatch: 'full' },
  { path: 'all-pokemons', component: AllPokemonsListComponent },
  { path: 'caught-pokemons', canActivate:[AuthGuardService], component: UsersPokemonsListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pokemons/:id', canActivate:[AuthGuardService], component: PokemonPageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
