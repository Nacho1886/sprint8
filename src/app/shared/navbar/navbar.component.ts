
import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user';
import { AuthService } from 'src/app/auth/services/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  desktopVersion!: boolean;
  user: Observable<User | undefined>
  
  constructor(private authService: AuthService) {
    this.desktopVersion = matchMedia("(min-width: 900px)").matches
    this.user = this.authService.user;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.desktopVersion = this.onChangeVersion(window.innerWidth)
  }

  onChangeVersion(width: number): boolean {
    if (width > 900) return true
    return false
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