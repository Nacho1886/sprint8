import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  @ViewChild('mainBtn') mainBtn!: ElementRef
  @ViewChild('options') options!: ElementRef

  user: Observable<User | undefined>
  
  constructor(
    private authService: AuthService,
    public localSt: LocalStorageService
    ) {
    this.user = this.authService.user
    }

  logout = this.authService.logout

  displayMenu() {
    this.mainBtn.nativeElement.classList.toggle("clickedMainBtn")
    this.options.nativeElement.classList.toggle("displayOptions")
  }

  ngOnInit(): void {
    document.addEventListener('click', (event) => {
      const condition1 = this.mainBtn.nativeElement.classList.contains("clickedMainBtn")
      const condition2 = !this.mainBtn.nativeElement.contains(event.target)
      const condition3 = !this.options.nativeElement.contains(event.target)

      if (condition1 && condition2 && condition3) this.displayMenu()
    })
  }
}
