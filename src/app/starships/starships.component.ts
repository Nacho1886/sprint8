import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from './services/api-requests.service';
import { Starship } from './interfaces/Starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starshipsArray!: Starship[]

  constructor( private apiRequests: ApiRequestsService ) { 
    this.apiRequests.getStarshipsPageApi().subscribe(page => this.starshipsArray =  page.results)
  }
  ngOnInit(): void {
  }

}
