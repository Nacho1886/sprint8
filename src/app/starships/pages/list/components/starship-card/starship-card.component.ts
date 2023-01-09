import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Starship } from '../../../../interfaces/starship';

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
