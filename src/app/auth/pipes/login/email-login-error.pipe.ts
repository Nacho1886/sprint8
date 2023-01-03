import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'emailLoginError'
})
export class EmailLoginErrorPipe implements PipeTransform {

  transform(form: FormGroup): string {
    const errors = form.get('email')?.errors
    if (errors?.['pattern']) return 'Please enter a valid email address.'
    return 'Required'
  }

}
