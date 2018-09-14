import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPokemonsComponent } from './components/all-pokemons/all-pokemons.component';
import { CatchedPokemonsComponent } from './components/catched-pokemons/catched-pokemons.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { PlebGuard } from './guards/pleb.guard';

const routes: Routes = [
  { path: '', redirectTo: 'all-pokemons', pathMatch: 'full' },
  { path: 'all-pokemons', component: AllPokemonsComponent, },
  { path: 'catched-pokemons', component: CatchedPokemonsComponent, canActivate: [AuthGuard] },
  { path: 'all-pokemons/:id', component: PokemonComponent, },
  { path: 'login', component: LoginComponent, canActivate: [PlebGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [PlebGuard] },
  { path: '**', component: PageNotFoundComponent, },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

