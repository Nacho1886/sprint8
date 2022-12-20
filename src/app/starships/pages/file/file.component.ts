import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRequestsService } from '../../services/api-requests.service';
import { Starship } from '../../interfaces/Starship';
import { switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {

  starship!: Starship
  starshipImage!: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiRequestsService: ApiRequestsService,
    private http: HttpClient
    ) {
      
    }

  /* getStarship() {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.apiRequestsService.getStarshipApi(id))
    ).subscribe( obs => console.log(obs)
    )
  } */

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.apiRequestsService.getStarshipApi(id))
    ).subscribe( obs => this.starship = obs)

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.apiRequestsService.getImageStarshipApi(id))
    ).subscribe( url => {
      this.starshipImage = url 
      console.log(url)}
    )
  }
}
