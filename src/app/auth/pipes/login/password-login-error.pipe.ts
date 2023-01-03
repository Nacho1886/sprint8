import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'passwordLoginError'
})
export class PasswordLoginErrorPipe implements PipeTransform {

  transform(form: FormGroup): string {
    const errors = form.get('password')?.errors
    if (errors?.['incorrectPassword'])
      return "The credentials you entered are incorrect. Reminder: passwords are case sensitive."
    return 'Required'
  }

}
