import { Component, ViewChild, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { PasswordValidatorService } from '../../services/password-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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
    private passwordValidator: PasswordValidatorService
  ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.authService.emailPattern)]],
      password: ['', [Validators.required], [this.passwordValidator]]
    })
  }
  ngOnInit(): void {
    this.userForm.get('email')?.valueChanges.subscribe(value => {
      if (value !== value.toLowerCase().trim()) this.userForm.get('email')?.setValue(value.toLowerCase().trim())
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
      return this.userForm.controls['password'].errors
    return null
  }


  validateUserId() {
    const email = this.userForm.get('email')!.value
    if(!this.userForm.controls['email'].errors) this.authService.validateExistEmail(email)
    .subscribe(obs => {
      if (obs) {
        this.email = obs.id
        this.passwordValidator.email = obs.id
      }
      
    })
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
