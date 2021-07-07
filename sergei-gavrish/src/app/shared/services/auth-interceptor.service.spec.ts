import { TestBed, inject } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { environment } from '../../../environments/environment';

import { AuthInterceptor } from './auth-interceptor.service';
import { PokemonsService } from './pokemons.service';

describe('AuthInterceptorService', () => {
  let authInterceptor: AuthInterceptor;
  let pokemonsService: PokemonsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PokemonsService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        }
      ]
    });
    pokemonsService = TestBed.get(PokemonsService);
    httpMock = TestBed.get(HttpTestingController);
    authInterceptor  = new AuthInterceptor();
  });

  it('should be created', inject([AuthInterceptor], (service: AuthInterceptor) => {
    expect(service).toBeTruthy();
  }));

  it('should add an Authorization header', () => {
    localStorage.setItem('tokenId', '12345');
    pokemonsService.getCathcedPokemons().subscribe(response => {
      expect(response).toBeTruthy();
    });
    const httpRequest = httpMock.expectOne(
      `${environment.host}/pokemons/catched/?_page=1&_limit=12`
    );
    expect(httpRequest.request.headers.has('x-access-token'));
  });

  it('should add an Authorization header', () => {
    localStorage.removeItem('tokenId');
    pokemonsService.getCathcedPokemons().subscribe(response => {
      expect(response).toBeTruthy();
    });
    const httpRequest = httpMock.expectOne(
      `${environment.host}/pokemons/catched/?_page=1&_limit=12`
    );
    expect(httpRequest.request.headers.has('Content-Type'));
  });

});
