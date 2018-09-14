import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { CatchedPageComponent } from './components/catched-page/catched-page.component';
import { ModalSingInComponent } from './components/modal-sing-in/modal-sing-in.component';
import { ModalSignUpComponent } from './components/modal-sign-up/modal-sign-up.component';
import { CanActivateAuthorised } from './guards/can-activate-catched.guard';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'catched',
    component: CatchedPageComponent,
    canActivate: [CanActivateAuthorised]
  },
  {
    path: 'pokemon',
    component: PokemonPageComponent,
    canActivate: [CanActivateAuthorised]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    NavigationComponent,
    HomePageComponent,
    PokemonCardComponent,
    CatchedPageComponent,
    ModalSingInComponent,
    ModalSignUpComponent,
    PokemonPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CanActivateAuthorised],
  bootstrap: [AppComponent]
})
export class AppModule { }
