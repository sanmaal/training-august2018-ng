import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { PokemonPageComponent } from './pokemon-page.component';
import { PokemonsService } from '../../shared/services/pokemons.service';
import { Pokemon } from '../../shared/models/pokemon';

class TestPokemonsService extends PokemonsService {
  constructor() {
    super(null);
  }

  private testCatchedPokemons = [
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
  ];

  getPokemon(id: number | string): Observable<Pokemon> {
    return of({
      id: 1,
      _id: '5b95001c76e9652d94bc0468',
      name: 'bulbasaur',
      date: new Date('2018-09-12 16:59:14.102'),
    });
  }

  catchPokemon(pokemon) {
    return of(pokemon);
  }

  checkCatched(id) {
    return this.testCatchedPokemons.find( pokemon =>
      pokemon._id === id );
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [ PokemonPageComponent ],
      providers: [
        {
           provide: PokemonsService,
           useClass: TestPokemonsService,
        },
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

  it('checkCatched should return true', () => {
    expect(component.checkCatched('5b95001c76e9652d94bc0468')).toBe(true);
  });

  it('checkCatched should return undefined', () => {
    expect(component.checkCatched('777')).toBe(undefined);
  });

  it('getDate should return undefined', () => {
    expect(component.getDate('777')).toBe(undefined);
  });

});
