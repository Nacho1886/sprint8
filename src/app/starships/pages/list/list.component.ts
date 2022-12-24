import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRequestsService } from '../../services/api-requests.service';
import { Starship } from '../../interfaces/starship';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  starshipsArray!: Starship[];

  constructor(
    private apiRequestsService: ApiRequestsService,
    private router: Router
  ) {
    this.apiRequestsService
      .getStarshipsPageApi()
      .subscribe((page) => (this.starshipsArray = page.results));
  }

  getStarship(urlString: string) {
    const urlArray = urlString.split('/').reverse().filter(e => e)
    const id = urlArray.find(e => !isNaN(Number(e)))
    this.router.navigate([`/starships/${id}`])
  }
}
