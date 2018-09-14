import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { of } from 'rxjs/internal/observable/of';

import { AllPokemonsListComponent } from './all-pokemons-list.component';
import { PokemonsService } from '../../services/pokemons/pokemons.service';
import { Pokemon } from '../../../../domain/Pokemon';
import { AuthService } from '../../../auth/sevices/auth/auth.service';

describe('AllPokemonsListComponent ', () => {
  let component: AllPokemonsListComponent ;
  let fixture: ComponentFixture<AllPokemonsListComponent >;

  let getPokemonsSpy: jasmine.Spy;

  const testPokemons: Pokemon[] = [
    {
      _id: '',
      id: 1,
      name: 'Pokemon1'
    },
    {
      _id: '',
      id: 2,
      name: 'Pokemon2'
    }
  ];

  beforeEach(async(() => {
    const authServiceStub = jasmine.createSpyObj('AuthService', ['checkAuth']);

    const pokemonsServiceStub = jasmine.createSpyObj('PokemonsService', ['getPokemons']);
    getPokemonsSpy = pokemonsServiceStub.getPokemons.and.returnValue( of(testPokemons) );

     TestBed.configureTestingModule({
      declarations: [ AllPokemonsListComponent  ],
      providers: [{ provide: PokemonsService, useValue: pokemonsServiceStub },
                  { provide: AuthService, useValue: authServiceStub },],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPokemonsListComponent );
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get pokemons', () => {
    expect(component.pokemons).toEqual(testPokemons);
  });

  it('should call getPokemons method twice', () => {
    component.pending = false;
    component.onScrollBottom();
    expect(getPokemonsSpy.calls.count()).toBe(2);
  });

  it('should call getPokemons method once', () => {
    component.pending = true;
    component.onScrollBottom();
    expect(getPokemonsSpy.calls.count()).toBe(1);
  });
});
