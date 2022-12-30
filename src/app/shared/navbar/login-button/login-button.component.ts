import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  @ViewChild('mainBtn') mainBtn!: ElementRef
  @ViewChild('options') options!: ElementRef

  constructor() { }
  
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
