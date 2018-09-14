import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PokemonsScreenComponent } from './pokemons-screen/pokemons-screen.component';
import { PokemonsrestService } from './pokemonsrest.service';
import { PokemonComponent } from './pokemon/pokemon.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule }   from '@angular/common/http';
import { ModalSignInComponent } from './modal-sign-in/modal-sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full'
  },
  { 
    path: 'pokemons',
    component: PokemonsScreenComponent,
    pathMatch: 'full'
  },
  { 
    path: 'pokemon/:id', 
    component: PokemonPageComponent,
    pathMatch: 'full'
  },
  { 
    path: '**', component: PageNotFoundComponent 
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PokemonsScreenComponent,
    PokemonComponent,
    ModalSignInComponent,
    PokemonPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
