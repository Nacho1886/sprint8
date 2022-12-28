import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../../interfaces/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  display: boolean = false;
  user: User | undefined
  emailForm: FormGroup

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private route: Router
    ) {
    this.emailForm = this.fb.group({
      email: [, Validators.email]
    })
  }

    showDialog() {
        this.display = true;
    }

    submitEmail() {
      const email = this.emailForm.value.email
      this.authService.validateUser(email).subscribe(obs => this.user = obs)
      if (!this.user) console.log(email);
      
    }
}
