import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PokemonListItemComponent } from './pokemon-list-item.component';
import { PokemonPageComponent } from '../pokemon-page/pokemon-page.component';
import { PokemonsService } from '../../shared/services/pokemons.service';

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

  catchPokemon(pokemon) {
    return of(pokemon);
  }

  checkCatched(id) {
    return this.testCatchedPokemons.find( pokemon =>
      pokemon._id === id );
  }
}

describe('PokemonListItemComponent', () => {
  let component: PokemonListItemComponent;
  let fixture: ComponentFixture<PokemonListItemComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      url: '/pokemon/5b95001c76e9652d94bc0468',
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [
        PokemonListItemComponent,
        PokemonPageComponent,
      ],
      providers: [
        {
          provide: PokemonsService,
          useClass: TestPokemonsService
        },
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListItemComponent);
    component = fixture.componentInstance;
    component.pokemon = {
      _id: '5b95001c76e9652d94bc0468',
      id: 1,
      name: 'bulbasaur',
    };
    component.isLoggedIn = true;
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

  it('catchPokemon should be equal to undefined', () => {
    expect(component.catchPokemon('5b95001c76e9652d94bc0468')).toBe(undefined);
  });

});
