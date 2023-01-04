import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'passwordRegisterError'
})
export class PasswordRegisterErrorPipe implements PipeTransform {

  transform(errors: ValidationErrors | null): string[] | void {
    if (errors) {
      // console.log("🚀 ~ file: password-register-error.pipe.ts:11 ~ PasswordRegisterErrorPipe ~ transform ~ errors", errors)
      const arrErrors: string[] = []
      if (errors['minlength']) arrErrors.push('Enter at least 6 characters.')
      if (errors['pattern']) arrErrors.push('Use letters together with spaces, numbers, or symbols (!@#$%^&*).')
      if (errors['mustMatch']) arrErrors.push("The credentials you entered are incorrect, passwords are different.")
      if (errors['required']) arrErrors.push('Required')
      // console.log("🚀 ~ file: password-register-error.pipe.ts:18 ~ PasswordRegisterErrorPipe ~ transform ~ arrErrors", arrErrors)
      return arrErrors
    }
  }

}
