import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'emailLoginError'
})
export class EmailLoginErrorPipe implements PipeTransform {

  transform(errors: ValidationErrors | null): string | void {
    if (errors) return errors['pattern'] ? 'Please enter a valid email address.' : 'Required'
  }
}
