import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'passwordLoginError'
})
export class PasswordLoginErrorPipe implements PipeTransform {

  transform(errors: ValidationErrors | null): string | void {
    if (errors){
       if (errors['incorrectPassword'])
        return "The credentials you entered are incorrect. Reminder: passwords are case sensitive."
       if (errors['accountDontExist'])
        return "account"
        return 'Required'}
  }

}
