import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  // @Output() desktopVersion!: boolean;
  @Output() desktopVersion: EventEmitter<boolean> = new EventEmitter(true)
  @ViewChild('boxContainer') boxContainer!: ElementRef
  
  constructor() { }
  onChangeW(elementQ: any) {
    // elementQ.subscribe((resized: any) => console.log(resized))
  
    console.log(elementQ.next());
    return elementQ
  }
  
  ngAfterViewInit(): void {
    new ResizeObservable(this.boxContainer.nativeElement).subscribe(resized => {
      const withSize = resized[0].contentRect.width
      if (withSize > 768) this.desktopVersion.emit(true)
      if (withSize <= 768) this.desktopVersion.emit(false)
    })
    this.desktopVersion
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
