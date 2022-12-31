
import { Component, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, filter, fromEvent, interval, map, startWith } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user';
import { AuthService } from 'src/app/auth/services/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnChanges {
  
  desktopVersion!: boolean;
  user: Observable<User | undefined>
  currentValue!: string | null
  
  constructor(private aAuthService: AuthService) {
    this.desktopVersion = matchMedia("(min-width: 900px)").matches
    this.user = this.aAuthService.user;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.desktopVersion = this.onChangeVersion(window.innerWidth)
  }

  onChangeVersion(width: number): boolean {
    if (width > 900) return true
    return false
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['user']) {
      console.log(this.user)
      
      // this.user = this.authService.user
    }
    
  }
}


















/* ngAfterViewInit(): void {

  @ViewChild('boxContainer') boxContainer!: ElementRef

  subscription!: Subscription
@Output() desktopVersion: EventEmitter<boolean> = new EventEmitter(true)

  this.subscription = new ResizeObservable(this.boxContainer.nativeElement).subscribe(resized => {
    const withSize = resized[0].contentRect.width
    if (withSize > 768) this.desktopVersion.emit(true)
    if (withSize <= 768) this.desktopVersion.emit(false)
    return
  })
  console.log("🚀 ~ file: navbar.component.ts:27 ~ NavbarComponent ~ this.pepe=newResizeObservable ~ this.pepe", this.subscription)
}

export class ResizeObservable extends Observable<ResizeObserverEntry[]> {
  constructor(elem: HTMLElement) {
    super(subscriber => {
      const ro = new ResizeObserver(entries => {
        subscriber.next(entries);
      });

      ro.observe(elem);

      return function unsubscribe() {
        ro.unobserve(elem);
        ro.disconnect();
      }
    });
  }
}
 */