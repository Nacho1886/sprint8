import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  email!: string

  constructor(
    private authService: AuthService,
    private router: Router
    ) {

    this.authService.email$.subscribe(obs => this.email = obs)
  }
  deleteEmail() {
    this.authService.email$.next('')
    this.router.navigate(['/auth/email-adress'])
  }
}
