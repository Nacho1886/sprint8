import { Component, Input } from '@angular/core';
import { Film } from '../../../../interfaces/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  @Input() films!: Film[]
}
