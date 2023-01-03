import { Component, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';

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
  // showPasswordMessage: boolean = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localSt: LocalStorageService,
    private authService: AuthService
  ) {
    this.authService.email$.subscribe(obs => this.email = obs)

    this.userForm = this.fb.group({
      email: [this.email],
      name: ['', [Validators.required, Validators.pattern(this.authService.namePattern)]],
      lastname: ['', [Validators.required, Validators.pattern(this.authService.namePattern)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.authService.passwordPattern)]],
      passwordConfirm: ['', [Validators.required]],
      offers: [false]
    }
    , {validator:this.authService.passwordMatchValidator}
    )
  }

  closable(): void { this.router.navigate(['/home']) }


  isInvalidField(inputName: string) {
    if (this.userForm.get(inputName)?.touched) return this.userForm.controls[inputName].errors
    return null
  }

  validateUserId() {
    const email = this.userForm.get('email')!.value
    if(!this.userForm.controls['email'].errors) this.authService.validateExistEmail(email)
    .subscribe(obs => { if (obs) this.authService.email$.next(obs.id) })
  }

  validateUserAccount() {
    if (!this.userForm.invalid) {
      const password = this.userForm.get('password')!.value
      this.authService.validatePassword(this.email!, password).subscribe(obs => this.authService.login(this.localSt, obs))
      this.router.navigate(['/home'])
    }
  }
}

