import { Component, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  userForm: FormGroup

  showPassword: boolean = false

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.userForm = this.fb.group({
      email: [this.authService.email$.getValue(), [Validators.required]],
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
      : this.authService.createAndLogin(this.userForm)
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

