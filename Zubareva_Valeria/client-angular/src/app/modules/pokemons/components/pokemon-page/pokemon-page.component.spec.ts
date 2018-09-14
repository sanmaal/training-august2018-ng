import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import {of} from 'rxjs/internal/observable/of';

import { PokemonPageComponent } from './pokemon-page.component';
import { CaughtPipe } from '../../pipes/caught/caught.pipe';
import { Pokemon } from '../../../../domain/Pokemon';
import { PokemonsService } from '../../services/pokemons/pokemons.service';
import { ActivatedRouteStub } from '../../../../../testing/activated-route-stub';


describe('PokemonPageComponent', () => {
  let component: PokemonPageComponent;
  let fixture: ComponentFixture<PokemonPageComponent>;

  let activatedRoute: ActivatedRouteStub;

  let getPokemonByIdSpy: jasmine.Spy;

  const testPokemon: Pokemon = {
    _id: '',
    id: 1,
    name: 'Pokemon1'
  };

  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub( { id: testPokemon.id });

    const pokemonsServiceStub = jasmine.createSpyObj('PokemonsService', ['getPokemonById']);
    getPokemonByIdSpy = pokemonsServiceStub.getPokemonById.and.returnValue(of(testPokemon));

    TestBed.configureTestingModule({
      declarations: [ PokemonPageComponent, CaughtPipe ],
      providers: [{ provide: PokemonsService, useValue: pokemonsServiceStub },
                  { provide: ActivatedRoute, useValue: activatedRoute },]
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

  it('should get pokemon', () => {
    expect(component.pokemon).toEqual(testPokemon);
  });
});
