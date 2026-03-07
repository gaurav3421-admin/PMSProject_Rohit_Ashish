// email-domain.validator.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailDomainValidator(domain: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;

    if (!email) return null;

    const valid = email.endsWith(`@${domain}`);

    return !valid ? { invalidDomain: true } : null;
  };
}