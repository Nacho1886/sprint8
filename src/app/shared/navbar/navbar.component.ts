import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  desktopVersion!: EventEmitter = new EventEmitter(true)
  @ViewChild('boxContainer') boxContainer!: ElementRef

  constructor() { }


  ngAfterViewInit(): void {
    this.desktopVersion = new ResizeObservable(this.boxContainer.nativeElement).subscribe(resized => {
      const withSize = resized[0].contentRect.width
      console.log("🚀 ~ file: navbar.component.ts:21 ~ NavbarComponent ~ this.desktopVersion=newResizeObservable ~ withSize", withSize)
      if (withSize >= 768) new EventEmitter(true)
      console.log("🚀 ~ file: navbar.component.ts:24 ~ NavbarComponent ~ this.desktopVersion=newResizeObservable ~ new EventEmitter(true)", new EventEmitter())
      if (withSize >= 768) return true
      if (withSize <= 768) return false
      return
    })
    
  }

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
