import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchedListComponent } from './catched-list.component';

describe('CatchedListComponent', () => {
  let component: CatchedListComponent;
  let fixture: ComponentFixture<CatchedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
