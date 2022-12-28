import { Component, OnDestroy, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Dialog } from 'primeng/dialog';

import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnDestroy {

  // display: boolean = true;
  private _user: User | undefined
  email: string | undefined
  userForm: FormGroup

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
    ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })

    this._user = JSON.parse(localStorage.getItem('User')!)
  }

    /* showDialog() {
        this.display = true;
    } */

    validateEmail() {
      const email = this.userForm.value.email
      this.authService.validateUser(email).subscribe(obs => this.email = obs.id)
    }
    validatePassword() {
      const email = this.userForm.get('email')!.value
      const password = this.userForm.get('password')!.value
      this.authService.validateUser(email).subscribe(obs => {
        if (password === obs.password) {
          this._user = obs
          localStorage.setItem('User', JSON.stringify(this._user))
        }
      })
    }

  isInvalid(inputName: string) { return this.userForm.controls[inputName].errors }


    ngOnDestroy(): void {
      console.log(this._user)
    }
}
