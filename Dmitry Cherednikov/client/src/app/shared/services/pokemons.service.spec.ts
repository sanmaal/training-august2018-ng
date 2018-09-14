import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { PokemonsService } from './pokemons.service';

describe('PokemonsService', () => {
  let service: PokemonsService;
  let httpClient: HttpClientTestingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonsService]
    });
    service = TestBed.get(PokemonsService);
    httpClient = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([PokemonsService], (service: PokemonsService) => {
    expect(service).toBeTruthy();
  }));
});
