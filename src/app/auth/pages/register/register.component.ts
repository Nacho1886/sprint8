import { Component, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {

  @ViewChild('loginDialog') loginDialog!: ElementRef

  email!: string
  userForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.email = this.authService.email$.getValue()

    this.userForm = this.fb.group({
      email: [this.email, [Validators.required]],
      name: ['', [Validators.required, Validators.pattern(this.authService.namePattern)]],
      lastname: ['', [Validators.required, Validators.pattern(this.authService.namePattern)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.authService.passwordPattern)
      ]],
      passwordConfirm: [''],
      offers: [false]
    }
      , { validator: (control: AbstractControl) => this.validatorConfirmPassword(control)}
    )
  }
  

  isInvalidField(inputName: string) {
    return this.userForm.get(inputName)?.touched ? this.userForm.controls[inputName].errors : null
  }


  createUserAccount() {
    this.userForm.invalid ? this.userForm.markAllAsTouched()
      : this.authService.createNewAccount(this.userForm)
  }
  

  validatorConfirmPassword(form: AbstractControl) {
    const passwordControl = form.get('password')!;
    const passwordConfirmControl = form.get('passwordConfirm')!;
    const areDiferrent = passwordControl.value !== passwordConfirmControl.value

    const errorsConfirmPassword = () => {
      return areDiferrent ? { mustMatch: true }
        : passwordConfirmControl.value === ''
          ? { required: true } : null
    }
    return passwordConfirmControl.setErrors(errorsConfirmPassword())
  }

}

