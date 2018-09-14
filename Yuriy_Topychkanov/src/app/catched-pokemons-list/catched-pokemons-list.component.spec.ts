import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchedPokemonsListComponent } from './catched-pokemons-list.component';

describe('CatchedPokemonsListComponent', () => {
  let component: CatchedPokemonsListComponent;
  let fixture: ComponentFixture<CatchedPokemonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchedPokemonsListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchedPokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
