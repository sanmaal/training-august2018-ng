import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { PokemonsService } from './pokemons.service';

describe('PokemonsService', () => {
  let service: PokemonsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonsService]
    });
    service = TestBed.get(PokemonsService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([PokemonsService], (service: PokemonsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observalbe<Pokemon[]>', () => {
    const dummyPokemons = [
      { name: "bulbasaur", id: 1, },
      { name: "ivysaur",id: 2 },
    ];

    service.getAllPokemons(1).subscribe(pokemons => {
      expect(pokemons.length).toBe(2);
      expect(pokemons).toEqual(dummyPokemons);
    })

    const req = httpMock.expectOne(`http://localhost:3001/api/pokemons/all/?page=1&amount=16`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPokemons);
  });

  it('should return an Observalbe<Pokemon[]>', () => {
    const dummyPokemons = [
      { name: "bulbasaur", id: 1, date: '15.09.2018, 14:30:27' },
      { name: "ivysaur",id: 2, date: '15.09.2018, 14:30:27' },
    ];

    service.getCatchedPokemons(1).subscribe(pokemons => {
      expect(pokemons.length).toBe(2);
      expect(pokemons).toEqual(dummyPokemons);
    })

    const req = httpMock.expectOne(`http://localhost:3001/api/pokemons/catched/?page=1&amount=16`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPokemons);
  });

  it('should return an Observalbe<Pokemon>', () => {
    const dummyPokemon = { 
      name: "bulbasaur", 
      id: 1, 
      date: '15.09.2018, 14:30:27',
    }

    service.getPokemon(1).subscribe(pokemon => {
      expect(pokemon).toEqual(dummyPokemon);
    })

    const req = httpMock.expectOne(`http://localhost:3001/api/pokemons/all/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPokemon);
  });
});
