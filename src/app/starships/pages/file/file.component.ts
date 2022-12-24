import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { ApiRequestsService } from '../../services/api-requests.service';
import { Starship } from '../../interfaces/starship';
import { StarshipImage } from '../../interfaces/starship-image';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {

  starship!: Starship
  starshipImage!: string
  id!: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiRequestsService: ApiRequestsService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({id}) => this.id = id)

    this.apiRequestsService.getStarshipApi(this.id).subscribe( obs => this.starship = obs)
    this.apiRequestsService.getImageStarshipApi(this.id)
    .subscribe( obj => {this.starshipImage = obj.url}
    )
  }
}
/* this.activatedRoute.params.pipe(
  switchMap(({id}) => this.apiRequestsService.getStarshipApi(id))
).subscribe( obs => this.starship = obs)

this.activatedRoute.params.pipe(
  switchMap(({id}) => this.apiRequestsService.getImageStarshipApi(id))
).subscribe( obj => {this.starshipImage = obj.url}
) */