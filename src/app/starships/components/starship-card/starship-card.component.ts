import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Starship } from '../../interfaces/Starship';
import { ApiRequestsService } from '../../services/api-requests.service';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StarshipCardComponent {
  @Input() starship!: Starship;

  constructor() { }
}
