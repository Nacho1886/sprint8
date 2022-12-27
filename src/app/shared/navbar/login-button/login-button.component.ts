import { Component, ViewChild, ElementRef } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
  providers: [MessageService]
})
export class LoginButtonComponent {
  @ViewChild('mainBtn') mainBtn!: ElementRef
  @ViewChild('options') options!: ElementRef

  constructor() { }
  
  displayMenu() {
    this.mainBtn.nativeElement.classList.toggle("clickedMainBtn")
    this.options.nativeElement.classList.toggle("displayOptions")
  }

  ngOnInit(): void {
    document.addEventListener('click', (event) => {
      console.log(this.mainBtn.nativeElement);
      
      const condition1 = this.mainBtn.nativeElement.classList.contains("clickedMainBtn")
      const condition2 = !this.mainBtn.nativeElement.contains(event.target)
      const condition3 = !this.options.nativeElement.contains(event.target)

      if (condition1 && condition2 && condition3) this.displayMenu()
    })
  }
}
