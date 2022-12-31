import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user';
import { Observable, fromEvent, interval, map, startWith } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.scss']
})
export class NavbarDesktopComponent implements OnChanges {
  @Input() user: User | undefined
  userData!: Observable<User | undefined>


  constructor(
    private authService: AuthService,
    public localSt: LocalStorageService
    ) {
      this.userData = this.authService.userData
    }

  logout = this.authService.logout

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['user']) {
      console.log(this.userData)
      
      this.userData = this.authService.userData
    }
    
  }
  
}
