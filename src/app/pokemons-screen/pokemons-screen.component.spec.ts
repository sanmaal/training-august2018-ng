import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsScreenComponent } from './pokemons-screen.component';
import { PokemonComponent } from '../pokemon/pokemon.component';

describe('PokemonsScreenComponent', () => {
  let component: PokemonsScreenComponent;
  let fixture: ComponentFixture<PokemonsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
