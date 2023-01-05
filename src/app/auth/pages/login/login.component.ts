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

  loginUser() {
    const password = this.userForm.get('password')!.value
    this.authService.authPasswordUser(password).subscribe(obs => this.authService.login(this.localSt, obs))
    this.router.navigate(['/home'])
  }

  validateUserAccount() {
    this.userForm.invalid ? this.showPasswordMessage = true : this.loginUser()
  }
}
