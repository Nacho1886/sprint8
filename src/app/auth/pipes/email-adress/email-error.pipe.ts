import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'emailError'
})
export class EmailErrorPipe implements PipeTransform {

  transform(errors: ValidationErrors | null): string | null {

    if (errors) return errors['pattern'] ? 'Please enter a valid email address.' : 'Required'

    return errors
  }
}
