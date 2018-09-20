import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { AuthService } from "./auth.service";
import { AuthInterceptor } from './auth.interceptor';
import { ScrollDirective } from './scroll.directive';
import { CaughtPipe } from './pipes/caught/caught.pipe';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PokemonsService } from './pokemons.service';
import { PokemonCaughtListComponent } from './pokemon-caught-list/pokemon-caught-list.component';
import { GuardService } from './guard.service';

export function init_app(firstLoadService: AuthService ) {
  return () => firstLoadService.checkToken();
}

const appRoutes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemons/pokemon/:id', component: PokemonPageComponent},
  { path: 'pokemons/caught', canActivate:[GuardService], component: PokemonCaughtListComponent},
  { path: 'users/registration', component: RegistrationComponent },
  { path: 'users/login', component: LoginComponent },  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonPageComponent,
    ScrollDirective,
    CaughtPipe,
    LoginComponent,
    RegistrationComponent,
    PokemonCaughtListComponent,    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
  ],
  providers: [AuthService,
    {
      provide: APP_INITIALIZER,
      deps: [AuthService],
      useFactory: init_app,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    PokemonsService, 
    GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
