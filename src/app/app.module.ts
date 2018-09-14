import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PokemonsComponent} from './pokemons/pokemons.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule,
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [AppComponent, PokemonsComponent, LoginComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
