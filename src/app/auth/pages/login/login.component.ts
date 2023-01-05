import { Component, ViewChild, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, UrlSegment } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { PasswordValidatorService } from '../../services/password-validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  @ViewChild('loginDialog') loginDialog!: ElementRef

  userForm: FormGroup
  
  
  accountDontExist: boolean = true
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
    this.authService.email$.subscribe(console.log)
    this.userForm.get('email')?.valueChanges.subscribe(value => {
      if (value !== value.toLowerCase().trim()) this.userForm.get('email')?.setValue(value.toLowerCase().trim())
    })
  }

  isInvalidEmail(): ValidationErrors | null {
    return this.userForm.get('email')?.touched ? this.userForm.controls['email'].errors : null
  }

  isInvalidPassword(): ValidationErrors | null {
    return this.showPasswordMessage ? this.userForm.controls['password'].errors : null
  }


  validateUserId() {
    const email = this.userForm.get('email')!
    if (!this.userForm.controls['email'].errors) this.authService.validateExistEmail(email.value)
    .subscribe(data => data ? this.accountDontExist = false : this.accountDontExist = true)
    email.markAsTouched()
  }

  loginUser() {
    const password = this.userForm.get('password')!.value
    this.authService.authPasswordUser(password).subscribe(obs => this.authService.login(this.localSt, obs))
    this.router.navigate(['/home'])
  }

  validateUserAccount() {
    this.userForm.invalid ? this.showPasswordMessage = true : this.loginUser()
  }

  closable(): void { this.router.navigate(['/home']) }
}
