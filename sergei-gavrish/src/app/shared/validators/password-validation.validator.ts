import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
  static match(form: AbstractControl) {
    const password = form.get('password').value;
    const confirmPassword = form.get('confirmPassword').value;
    if (password === confirmPassword) {
      return null;
    } else {
      form.get('confirmPassword').setErrors({wrongPassword: true});
    }
  }
}