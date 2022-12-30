import { Component, OnDestroy, ViewChild, ViewContainerRef, ViewEncapsulation, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnDestroy {

  @ViewChild('loginDialog') loginDialog!: ElementRef

  // display: boolean = true;
  email: string | undefined
  userForm: FormGroup

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
    ) {
    this.userForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  closable(): void { this.router.navigate(['/home']) }

    /* showDialog() {
        this.display = true;
    } */

    
    validateUser() {
      const email = this.userForm.get('email')!.value
      const password = this.userForm.get('password')!.value
      this.authService.validateAccount(email).subscribe(obs => {
        this.email = obs.id
        if (password === obs.password) this.authService.userSaved = of(true)
      })
    }

  isInvalid(inputName: string) { return this.userForm.controls[inputName].errors }


    ngOnDestroy(): void {
      // console.log(this._user)
    }
}
