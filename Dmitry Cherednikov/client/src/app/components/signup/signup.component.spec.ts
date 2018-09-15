import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../shared/services/user.service';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('UserService', ['signup']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [ SignupComponent ],
      providers: [
        UserService, { provide: UserService, useValue: spy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    userServiceSpy = TestBed.get(UserService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change submitted value when submit is called', () => {
    expect(component.submitted).toEqual(false);
    component.onSubmit();
    expect(component.submitted).toEqual(true);
  })

  it ('should not be called when form is invalid', () => {
    component.onSubmit();
    expect(userServiceSpy.signup.calls.count()).toBe(0);
  });

  it ('should be called when form is valid', () => {
    userServiceSpy.signup.and.returnValue({ subscribe: () => {}});

    component.loginForm.controls['name'].setValue("Adore");
    component.loginForm.controls['password'].setValue("123456");
    expect(component.loginForm.valid).toBeTruthy();

    component.onSubmit();
    expect(userServiceSpy.signup.calls.count()).toBe(1);
  });

  it('getter should return loginForm controls', () => {
    expect(component.f).toEqual(component.loginForm.controls)
  })
});
