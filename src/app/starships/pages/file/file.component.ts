import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { ApiRequestsService } from '../../services/api-requests.service';
import { Starship } from '../../interfaces/starship';
import { StarshipImage } from '../../interfaces/starship-image';
import { Film } from '../../interfaces/film';
import { Pilot } from '../../interfaces/pilot';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {
  id!: string;

  starship!: Starship;
  starshipImage!: StarshipImage;
  films: Film[] = [];
  pilots: Pilot[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiRequestsService: ApiRequestsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => (this.id = id));

    this.apiRequestsService.getStarshipApi(this.id).subscribe((obs) => {
      this.starship = obs;

      obs.films.forEach((url) =>
        this.apiRequestsService
          .getFilmApi(url)
          .subscribe((obs) => this.films.push(obs))
      );

      obs.pilots.forEach((url) =>
        this.apiRequestsService
          .getPilotApi(url)
          .subscribe((obs) => this.pilots.push(obs))
      );
    });

    this.apiRequestsService.getImageStarshipApi(this.id).subscribe((obs) => {
      this.starshipImage = obs;
    });
  }
}
