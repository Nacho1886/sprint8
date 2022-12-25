import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';

import { StarshipsPage } from '../pages/starships-page';
import { Starship } from '../interfaces/starship';
import { StarshipImage } from '../interfaces/starship-image';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestsService {
  urlStarshipsApi:        string = 'https://swapi.dev/api/starships/';
  urlImagesStarshipsApi:  string = 'https://starwars-visualguide.com/assets/img/starships/';
  urlStarshipJsonServer:  string = 'http://localhost:3000/starshipsImage/';
  page: number = 3;

  constructor(private http: HttpClient, private router: Router) {}

  getStarshipsPageApi(): Observable<StarshipsPage> {
    return this.http.get<StarshipsPage>(
      this.urlStarshipsApi + '?page=' + this.page
    );
  }

  getStarshipApi(id: string): Observable<Starship> {
    return this.http.get<Starship>(this.urlStarshipsApi + id);
  }

  getImageStarshipApi(id: string): Observable<StarshipImage> {
    return this.http.get<StarshipImage>(this.urlStarshipJsonServer + id);
  }
}


/* (async () => { // Usado para rellenar mi API y así solo usar una
  const response = await fetch(this.urlImagesStarshipsApi + id + '.jpg');
  if (response.status === 200) {
    const newPost: StarshipImage = {
      id: Number(id),
      url: `${this.urlImagesStarshipsApi}${id}.jpg`,
    };
    this.http.post(this.urlStarshipJsonServer, newPost).subscribe()
  }
})(); */
