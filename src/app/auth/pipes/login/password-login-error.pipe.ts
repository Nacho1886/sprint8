import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'passwordLoginError'
})
export class PasswordLoginErrorPipe implements PipeTransform {

  transform(errors: ValidationErrors | null): string | void {
    if (errors)
      return errors['incorrectPassword']
        ? "The credentials you entered are incorrect. Reminder: passwords are case sensitive."
        : 'Required'
  }

}
