import { Component, ViewChild, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs';

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
    private router: Router,
    private authService: AuthService
  ) {
    this.email = this.authService.email$.getValue()

    this.userForm = this.fb.group({
      email: [this.email],
      name: ['', [Validators.required, Validators.pattern(this.authService.namePattern)]],
      lastname: ['', [Validators.required, Validators.pattern(this.authService.namePattern)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.authService.passwordPattern)]],
      passwordConfirm: ['', [Validators.required]],
      offers: [false]
    }
    , {validator:this.authService.passwordMatchValidator as AbstractControlOptions}
    )
  }

  closable(): void { this.router.navigate(['/home']) }


  isInvalidField(inputName: string) {
    return this.userForm.get(inputName)?.touched ?  this.userForm.controls[inputName].errors : null
  }


  createUserAccount() {
    if (!this.userForm.invalid) this.authService.createNewAccount(this.userForm)
  }
}

