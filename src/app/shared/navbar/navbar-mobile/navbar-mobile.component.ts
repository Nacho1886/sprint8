import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent {

  @Input() user!: Observable<User | undefined> 

  @ViewChild('burger') burger!: ElementRef
  @ViewChild('navMobile') navMobile!: ElementRef

  constructor() { }
  
  displayMenu() {
    this.burger.nativeElement.classList.toggle("active")
    this.navMobile.nativeElement.classList.toggle("show")
  }

  ngOnInit(): void {
    document.addEventListener('click', (event) => {
      const condition1 = this.burger.nativeElement.classList.contains("active")
      const condition2 = !this.burger.nativeElement.contains(event.target)
      const condition3 = !this.navMobile.nativeElement.contains(event.target)

      if (condition1 && condition2 && condition3) this.displayMenu()
    })
  }
}
