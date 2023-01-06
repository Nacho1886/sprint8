import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestsService } from '../../services/api-requests.service';
import { Starship } from '../../interfaces/starship';
import { BehaviorSubject, concatMap } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  starshipsSubject = new BehaviorSubject<Starship[]>([])
  page$: BehaviorSubject<number> = new BehaviorSubject(1)

  isLoading: boolean = true
  loadIsNotCompleted: boolean = true

  constructor(
    private apiRequestsService: ApiRequestsService,
    private router: Router
  ) {
    this.page$.pipe(
      concatMap(page => this.apiRequestsService.getStarshipsPageApi(page))
    ).subscribe(page => {
      this.starshipsSubject.next(
        this.starshipsSubject.getValue().concat(page.results)
      )
      if (page.next === null) {
        this.page$.complete()
        this.loadIsNotCompleted = false
      }
      this.isLoading = false
    })
  }

  @HostListener('window:scroll') onScroll() {
    if ((window.innerHeight + window.scrollY >= document.body.offsetHeight) && !this.isLoading) {
      this.isLoading = true
      this.page$.next(this.page$.value + 1)
    }
  }


  getStarship(urlString: string) {
    const urlArray = urlString.split('/').reverse().filter(e => e)
    const id = urlArray.find(e => !isNaN(Number(e)))
    this.router.navigate([`/starships/${id}`])
  }
}
