import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Starship } from '../../interfaces/Starship';
import { ApiRequestsService } from '../../services/api-requests.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  starshipsArray!: Starship[]

  constructor(
    private apiRequestsService: ApiRequestsService,
    private activatedRoute: ActivatedRoute
    ) { 
    this.apiRequestsService.getStarshipsPageApi().subscribe(page => this.starshipsArray = page.results)
  }


  getStarship(url: string) {
    
    this.activatedRoute.params.subscribe(obs => console.log(obs))
    // this.activatedRoute.fragment.subscribe(obs => console.log(obs))

    this.apiRequestsService.getStarshipApi(url).subscribe(observer => console.log(observer))
  }
}
