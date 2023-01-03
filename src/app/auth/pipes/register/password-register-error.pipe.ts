import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'passwordRegisterError'
})
export class PasswordRegisterErrorPipe implements PipeTransform {

  transform(form: FormGroup): string {
    const errors = form.get('password')?.errors
    if (errors?.['minLength']) return 'Enter at least 6 characters.'
    if (errors?.['pattern']) return 'Use letters together with spaces, numbers, or symbols (!@#$%^&*).'
    if (errors?.['mustMatch']) return "The credentials you entered are incorrect, passwords are different."

    return 'Required'
  }

}
