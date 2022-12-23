import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Starship } from '../../interfaces/starship';
import { ApiRequestsService } from '../../services/api-requests.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  starshipsArray!: Starship[];

  constructor(
    private apiRequestsService: ApiRequestsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.apiRequestsService
      .getStarshipsPageApi()
      .subscribe((page) => (this.starshipsArray = page.results));
  }

  getStarship(urlString: string) {
    const urlArray = new URL(urlString).pathname.split('/')
    console.log("🚀 ~ file: list.component.ts:25 ~ ListComponent ~ getStarship ~ urlArray", urlArray)
    const id = urlArray.find(e => Number(e) === typeof Number()))
  }
}
