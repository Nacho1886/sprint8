import { Component, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { EmailValidatorService } from '../../services/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {

  @ViewChild('loginDialog') loginDialog!: ElementRef

  email: string | undefined
  userForm: FormGroup
  showPasswordMessage: boolean = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localSt: LocalStorageService,
    private authService: AuthService,
    private emailValidator: EmailValidatorService
  ) {
    this.authService.email$.subscribe(obs => this.email = obs)

    this.userForm = this.fb.group({
      email: [this.email, [Validators.required, Validators.pattern(this.authService.emailPattern)], [this.emailValidator]],
      name: ['', [Validators.required, Validators.pattern(this.authService.namePattern)]],
      lastname: ['', [Validators.required, Validators.pattern(this.authService.namePattern)]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]],
      offers: [false, [Validators.required]]
    }, {validators: this.authService.passwordChecker('password', 'passwordConfirm')})
  }

  closable(): void { this.router.navigate(['/home']) }
  

  get emailErrorMsg(): string {
    const errors = this.userForm.get('email')?.errors
    if (errors?.['pattern']) return 'Please enter a valid email address.'
    return 'Required'
  }
  get passwordErrorMsg(): string {
    const errors = this.userForm.get('password')?.errors
    if (errors?.['incorrectPassword'])
      return "The credentials you entered are incorrect. Reminder: passwords are case sensitive."
    return 'Required'
  }


  isInvalidEmail() {
    if (this.userForm.get('email')?.touched) return this.userForm.controls['email'].errors
    return null
  }
  isInvalidPassword() {
    if (this.userForm.get('password')?.touched && this.showPasswordMessage)
      return this.userForm.controls['password'].errors
    return null
  }


  validateUserId() {
    const email = this.userForm.get('email')!.value
    if(!this.userForm.controls['email'].errors) this.authService.validateExistEmail(email)
    .subscribe(obs => { if (obs) this.authService.email$.next(obs.id) })
  }

  validateUserAccount() {
    if (this.userForm.invalid) this.showPasswordMessage = true
    if (!this.userForm.invalid) {
      const password = this.userForm.get('password')!.value
      this.authService.validatePassword(this.email!, password).subscribe(obs => this.authService.login(this.localSt, obs))
      this.router.navigate(['/home'])
    }
  }
}

