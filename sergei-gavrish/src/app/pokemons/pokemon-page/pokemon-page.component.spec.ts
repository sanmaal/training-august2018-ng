import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BehaviorSubject, Observable, of, defer } from 'rxjs';

import { PokemonPageComponent } from './pokemon-page.component';
import { PokemonsService } from '../../shared/services/pokemons.service';
import { Pokemon } from '../../shared/models/pokemon';

const getTestPokemon = (): Pokemon => {
  return {
    id: 1,
    _id: '5b95001c76e9652d94bc0468',
    name: 'bulbasaur' };
};

const pokemonData = {
  id: 1,
  _id: '5b95001c76e9652d94bc0468',
  name: 'bulbasaur'
};

const asyncData = <T>(data: T) => {
  return defer(() => Promise.resolve(data));
};

class PokemonData {
  public getPokemon(id: string): Observable<Pokemon> {
    return of({
      id: 1,
      _id: '5b95001c76e9652d94bc0468',
      name: 'bulbasaur'
    });
  }
}

class TestPokemonsService extends PokemonsService {
  constructor() {
    super(null);
  }

  pokemon = getTestPokemon();
  result: Observable<any>;

  public getPokemon(id: number | string): Observable<Pokemon> {
    return this.result = asyncData(this.pokemon);
  }
}

describe('PokemonPageComponent', () => {
  let component: PokemonPageComponent;
  let fixture: ComponentFixture<PokemonPageComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      url: '/pokemon/5b95001c76e9652d94bc0468',
    },
    paramMap: new BehaviorSubject(
      convertToParamMap({
        id: '5b95001c76e9652d94bc0468'
      })
    )
  };

  let pokemon: PokemonData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [ PokemonPageComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
