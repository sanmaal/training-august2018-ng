import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

import { SignInUpComponent } from './sign-in-up.component';

describe('SignInUpComponent', () => {
  let component: SignInUpComponent;
  let fixture: ComponentFixture<SignInUpComponent>;

  const activatedRoute = {
    snapshot: {
      data: {
        form: 'signIn'
      },
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        SignInUpComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRoute,
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component.onSubmit());
  });

  it('should create', () => {
    component.profileForm.setValue({
      login: 'Igor',
      password: 'Krutoy',
    });
    expect(component.onSubmit());
  });

});
