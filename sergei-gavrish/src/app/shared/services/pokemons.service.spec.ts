import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokemonsService } from './pokemons.service';

describe('PokemonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonsService]
    });
  });

  it('should be created', inject([PokemonsService], (service: PokemonsService) => {
    expect(service).toBeTruthy();
  }));
});
