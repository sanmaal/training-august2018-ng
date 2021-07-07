import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokemonsService } from './pokemons.service';

import { defer } from 'rxjs';

const asyncData = <T>(data: T) => {
  return defer(() => Promise.resolve(data));
};

const testData = {
  pokemon: {
    id: 1,
    _id: '5b95001c76e9652d94bc0468',
    name: 'bulbasaur',
  },
  pokemons: [
    {
      id: 1,
      _id: '5b95001c76e9652d94bc0468',
      name: 'bulbasaur',
    },
    {
      id: 2,
      _id: '5b95001c76e9652d94bc0469',
      name: 'ivysaur',
    },
  ],
  catchedPokemons: [
    {
      id: 1,
      _id: '5b95001c76e9652d94bc0468',
      name: 'bulbasaur',
      date: new Date('2018-09-12 16:59:14.102'),
    },
    {
      id: 2,
      _id: '5b95001c76e9652d94bc0469',
      name: 'ivysaur',
      date: new Date('2018-09-12 16:59:17.931'),
    },
  ],
};

describe('PokemonsService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let pokemonsService: PokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonsService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    pokemonsService = new PokemonsService(<any> httpClientSpy);
  });

  it('should be created', inject([PokemonsService], (service: PokemonsService) => {
    expect(service).toBeTruthy();
  }));

  it('get pokemons', () => {
    expect(pokemonsService.pokemons).toEqual([]);
  });

  it('get catchedPokemons', () => {
    expect(pokemonsService.catchedPokemons).toEqual([]);
  });

  it('set pokemonsPage', () => {
    pokemonsService.pokemonsPage = 1;
    expect(pokemonsService.pokemonsPage).toEqual(2);
  });

  it('set catchedPokemonsPage', () => {
    pokemonsService.catchedPokemonsPage = 1;
    expect(pokemonsService.catchedPokemonsPage).toEqual(2);
  });

  it('should return expected pokemons (HttpClient called once)', () => {
    httpClientSpy.get.and.returnValue(asyncData(testData.pokemons));
    pokemonsService.getPokemons().subscribe(
      pokemons => expect(pokemons).toEqual(testData.pokemons, 'testData.pokemons'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return expected catchedPokemons (HttpClient called once)', () => {
    httpClientSpy.get.and.returnValue(asyncData(testData.catchedPokemons));
    pokemonsService.getCathcedPokemons().subscribe(
      catchedPokemons => expect(catchedPokemons).toEqual(testData.catchedPokemons, 'testData.pokemons'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return expected pokemon (HttpClient called once)', () => {
    httpClientSpy.get.and.returnValue(asyncData(testData.pokemon));
    pokemonsService.getPokemon('5b95001c76e9652d94bc0468').subscribe(
      pokemon => expect(pokemon).toEqual(testData.pokemon, 'testData.pokemons'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});
