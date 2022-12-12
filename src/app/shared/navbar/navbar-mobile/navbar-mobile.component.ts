import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent {
  @ViewChild('navMobile') navMobile!: ElementRef
  constructor() { }
  
  hamburgerMenu(e: any) {
    e.currentTarget.classList.toggle("active")
    this.navMobile.nativeElement.classList.toggle("show")
  }
}
