import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLogicComponent } from './main-logic.component';

describe('MainLogicComponent', () => {
  let component: MainLogicComponent;
  let fixture: ComponentFixture<MainLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
