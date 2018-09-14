import { TestBed, inject } from '@angular/core/testing';

import { PokemonsrestService } from './pokemonsrest.service';

describe('PokemonsrestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonsrestService]
    });
  });

  it('should be created', inject([PokemonsrestService], (service: PokemonsrestService) => {
    expect(service).toBeTruthy();
  }));
});
