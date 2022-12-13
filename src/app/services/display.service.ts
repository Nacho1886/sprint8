import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  version$: Subject<boolean>
  observer: ResizeObserver

  
  constructor() {
  this.version$ = new Subject()
  this.observer = new ResizeObserver(entries => {
    entries.forEach(entry => {
      console.log("width", entry.contentRect.width);
      console.log("height", entry.contentRect.height);
    });
  });
}
  

  changeVersion() {
    console.log(this.version$)
    this.version$.subscribe(version => console.log(version))
    console.log(this.version$.asObservable())
    // return this.version$.asObservable()
  }
  
  ngOnInit(): void {
    this.version$.subscribe({
      next: () => matchMedia("(max-width: 768px)").matches
    })

  }
    
}
