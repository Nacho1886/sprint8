import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
  name: 'nameRegisterError'
})
export class NameRegisterErrorPipe implements PipeTransform {

  transform(form: FormGroup, input: string): string {
    const errors = form.get(input)?.errors
    if (errors?.['pattern']) return `Please enter a valid ${input}.`
    return 'Required'
  }

}
