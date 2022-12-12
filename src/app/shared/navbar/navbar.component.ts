import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  desktopVersion: boolean = false;
  obvs = new Observable<boolean>(
    if (matchMedia("(max-width: 700px)"))
  )
  constructor() {}


}
