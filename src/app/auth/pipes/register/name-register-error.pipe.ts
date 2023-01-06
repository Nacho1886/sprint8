import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'nameRegisterError'
})
export class NameRegisterErrorPipe implements PipeTransform {

  transform(errors: ValidationErrors | null, input: string): string | void {
    if (errors) return errors['pattern'] ? `Please enter your ${input}.` : 'Required'
  }

}
