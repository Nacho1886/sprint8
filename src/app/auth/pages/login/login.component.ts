import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';
import { PasswordValidatorService } from '../../services/password-validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

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
      email: [this.authService.email$.getValue(), [Validators.required]],
      password: ['', [Validators.required], [this.passwordValidator]]
    })
  }

  isInvalidPassword(): ValidationErrors | null {
    return this.showPasswordMessage ? this.userForm.controls['password'].errors : null
  }

  validateUserAccount() {
    this.userForm.invalid ? this.showPasswordMessage = true : this.authService.loginUser(this.userForm).subscribe()
  }
}
