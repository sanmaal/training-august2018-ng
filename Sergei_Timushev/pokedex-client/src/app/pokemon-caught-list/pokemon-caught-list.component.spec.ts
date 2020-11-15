import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCaughtListComponent } from './pokemon-caught-list.component';

describe('PokemonCaughtListComponent', () => {
  let component: PokemonCaughtListComponent;
  let fixture: ComponentFixture<PokemonCaughtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonCaughtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCaughtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
