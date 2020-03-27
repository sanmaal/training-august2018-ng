import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardCatchedComponent } from './pokemon-card-catched.component';

describe('PokemonCardCatchedComponent', () => {
  let component: PokemonCardCatchedComponent;
  let fixture: ComponentFixture<PokemonCardCatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonCardCatchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardCatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
