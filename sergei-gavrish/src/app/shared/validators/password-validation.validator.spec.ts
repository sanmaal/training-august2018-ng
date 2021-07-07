import { TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { PasswordValidation } from './password-validation.validator';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [PasswordValidation]
    });
  });

  it('should be created', inject([PasswordValidation], (validator: PasswordValidation) => {
    expect(validator).toBeTruthy();
  }));

  it('confirmPassword should has Error', () => {
    const profileForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
    profileForm.setValue({
      login: 'Igor',
      password: 'Krutoy',
      confirmPassword: 'WHITE',
    });
    PasswordValidation.match(profileForm);
    expect(profileForm.controls.confirmPassword.hasError('wrongPassword')).toBe(true);
  });

});
