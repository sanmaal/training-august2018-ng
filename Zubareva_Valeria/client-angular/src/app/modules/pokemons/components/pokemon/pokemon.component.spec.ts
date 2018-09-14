import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core'
import { By } from '@angular/platform-browser';

import { PokemonComponent } from './pokemon.component';
import { RouterLinkDirectiveStub } from '../../../../../testing/router-link-directive-stub';
import { Pokemon } from '../../../../domain/Pokemon';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  let routerLinks: RouterLinkDirectiveStub[];
  let linkDes: DebugElement[];

  const testPokemon: Pokemon = {
    _id: '',
    id: 1,
    name: 'Pokemon1'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonComponent, RouterLinkDirectiveStub ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    component.pokemon = testPokemon;
    fixture.detectChanges();

    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkDirectiveStub));

    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render pokemon name', () => {
    const pokemonElement: HTMLElement = fixture.nativeElement;
    const figcaption = pokemonElement.querySelector('figcaption');
    expect(figcaption.textContent).toEqual('Pokemon1');
  });
});
