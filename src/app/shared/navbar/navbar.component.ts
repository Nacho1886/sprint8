import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  desktopVersion: boolean = false;
  obvs = new Observable<boolean>(observer =>
    observer =  matchMedia("(max-width: 768px)").onchange(eve => observer)
    )

  
  constructor() {}

  changeVersion(): boolean {
    const mediaQuery: MediaQueryList  = matchMedia("(max-width: 768px)")
    return mediaQuery.matches
  }

}
