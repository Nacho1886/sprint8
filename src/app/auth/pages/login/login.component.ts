import { Component, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  @ViewChild('loginDialog') loginDialog!: ElementRef

  email: string | undefined
  userForm: FormGroup
  showPasswordMessage: boolean = false

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.authService.emailPattern)]],
      password: ['', [Validators.required], [this.authService]]
    })
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
      return this.userForm.controls['password'].errors, 1000
    return null
  }


  validateUserId() {
    const email = this.userForm.get('email')!.value
    this.authService.validateEmail(email).subscribe(obs => {
      this.email = obs.id
      this.authService.email = obs.id
    })
  }

  validateUserAccount() {
    if (this.userForm.invalid) this.showPasswordMessage = true
    if (!this.userForm.invalid) {
      const password = this.userForm.get('password')!.value
      this.authService.validatePassword(this.email!, password).subscribe()
      this.router.navigate(['/home'])
    }
  }
}