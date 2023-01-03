import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss']
})
export class NavbarDesktopComponent {
  user!: Observable<User | undefined>


  constructor(
    private router: Router,
    public localSt: LocalStorageService,
    private authService: AuthService
  ) {
    this.user = this.authService.user
  }

  logout = this.authService.logout

  get path() { return this.router.url.split('/').find(e =>  e !== '') }
  
}
