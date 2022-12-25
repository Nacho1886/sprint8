import { Component, Input } from '@angular/core';
import { Starship } from '../../../../interfaces/starship';

@Component({
  selector: 'app-main-starship-card',
  templateUrl: './main-starship-card.component.html',
  styleUrls: ['./main-starship-card.component.scss']
})
export class MainStarshipCardComponent {
  @Input() starship!: Starship
  @Input() starshipImage!: string
}
