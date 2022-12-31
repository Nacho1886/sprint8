import { Component, Input } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user';
import { Observable, fromEvent, interval, map, startWith } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss']
})
export class NavbarDesktopComponent {
  @Input() user: User | undefined

  constructor(private authService: AuthService,
    private localSt: LocalStorageService
    ) { }

  logout = this.authService.logout
  
}
