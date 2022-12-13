import { Component } from '@angular/core';
import { DisplayService } from '../../services/display.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  desktopVersion!: boolean

  
  constructor(private displayService: DisplayService) {
    this.displayService.observer.observe()
    
  }

  /* changeVersion() {
    return this.version$.asObservable()
  } */
  
  ngOnInit(): void {
    this.displayService.changeVersion()
    console.log(matchMedia("(max-width: 768px)"));
    // console.log(onresize());
    
  }

}
