import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  email!: string

  constructor(private authService: AuthService) {

    this.authService.email$.subscribe(obs => this.email = obs)
  }

  deleteEmail = this.authService.deleteEmail
}
