import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Starship } from '../../../../interfaces/starship';
import { StarshipImage } from '../../../../interfaces/starship-image';
import { Film } from '../../../../interfaces/film';
import { Pilot } from '../../../../interfaces/pilot';

@Component({
  selector: 'app-main-starship-card',
  templateUrl: './main-starship-card.component.html',
  styleUrls: ['./main-starship-card.component.scss']
})
export class MainStarshipCardComponent {
  @Input() starship!: Starship
  @Input() films!: Film[]
  @Input() pilots!: Pilot[]
  @Input() starshipImage!: StarshipImage
}
