import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPokemonsComponent } from './components/all-pokemons/all-pokemons.component';
import { CatchedPokemonsComponent } from './components/catched-pokemons/catched-pokemons.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsService } from './shared/services/pokemons.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserService } from './shared/services/user.service';
import { HeaderComponent } from './components/header/header.component';
import { LoadingPipe } from './shared/pipes/loading.pipe'; 
import { CatchPipe } from './shared/pipes/catch.pipe'; 
import { DataPipe } from './shared/pipes/data.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    AllPokemonsComponent,
    CatchedPokemonsComponent,
    LoginComponent,
    SignupComponent,
    PokemonComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoadingPipe,
    CatchPipe,
    DataPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [PokemonsService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
