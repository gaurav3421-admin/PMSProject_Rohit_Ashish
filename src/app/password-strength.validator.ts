// password-strength.validator.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const minLength = value.length >= 8;

    const passwordValid = hasUpperCase && hasNumber && minLength;

    return !passwordValid ? { passwordStrength: true } : null;
  };
}