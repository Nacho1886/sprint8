import { Component, Input } from '@angular/core';
import { Starship } from '../../interfaces/Starship';
import { ApiRequestsService } from '../../services/api-requests.service';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss']
})
export class StarshipCardComponent {
  @Input() starship!: Starship;

  constructor(private apiRequests: ApiRequestsService) { }

  getStarship = this.apiRequests.getStarshipApi
}
