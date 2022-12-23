import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StarshipsPage } from '../interfaces/starships-page';
import { Starship } from '../interfaces/starship';
import { StarshipImage } from '../interfaces/starship-image';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  urlStarshipsApi:        string = 'https://swapi.dev/api/starships/'
  urlImagesStarshipsApi:  string = 'https://starwars-visualguide.com/assets/img/starships/'
  urlStarshipJsonServer:  string = 'http://localhost:3000/starshipsImage/'
  page: number = 1

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  getStarshipsPageApi(): Observable<StarshipsPage> {
    return this.http.get<StarshipsPage>(this.urlStarshipsApi + '?page=' + this.page)
  }

  getStarshipApi(id: string): Observable<Starship> {
    return this.http.get<Starship>(this.urlStarshipsApi + id)
  }

  getImageStarshipApi(id: string): Observable<StarshipImage> {
    return this.http.get<StarshipImage>(this.urlStarshipJsonServer + id)
  }
}
//this.http.get<string>(this.urlImagesStarshipsApi + id + '.jpg') || 