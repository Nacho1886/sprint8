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
    private apiRequests: ApiRequestsService,
    private route: ActivatedRoute
    ) { 
    this.apiRequests.getStarshipsPageApi().subscribe(page => this.starshipsArray = page.results)
  }


  getStarship(url: string){
    
    this.route.fragment.subscribe(obs => console.log(obs)
    )
    this.apiRequests.getStarshipApi(url).subscribe(observer => console.log(observer))
  }
}
