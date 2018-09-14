import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule} from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PokemonsModule } from './modules/pokemons/pokemons.module';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/sevices/auth/auth.service';
import { AuthInterceptor } from './auth.interceptor';

export function init_app(firstLoadService: AuthService ) {
  return () => firstLoadService.checkToken();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    PokemonsModule,
    AuthModule,
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
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
