import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { StarshipsPage } from '../pages/starships-page';
import { Starship } from '../interfaces/starship';
import { StarshipImage } from '../interfaces/starship-image';
import { Film } from '../interfaces/film';
import { Pilot } from '../interfaces/pilot';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestsService {
  urlStarshipsApi:        string = 'https://swapi.dev/api/starships/'
  urlImagesStarshipsApi:  string = 'https://starwars-visualguide.com/assets/img/starships/'
  urlJsonServer:  string = 'http://localhost:3000/starshipsImage/'

  constructor(private http: HttpClient) {}

  getStarshipsPageApi(page: number): Observable<StarshipsPage> {
    return this.http.get<StarshipsPage>(
      this.urlStarshipsApi + '?page=' + page
    )
  }

  getStarshipApi(id: string): Observable<Starship> {
    return this.http.get<Starship>(this.urlStarshipsApi + id);
  }

  getImageStarshipApi(id: string): Observable<StarshipImage> {
    return this.http.get<StarshipImage>(this.urlJsonServer + id);
  }

  getFilmApi(url: string): Observable<Film> {
    return this.http.get<Film>(url);
  }

  getPilotApi(url: string): Observable<Pilot> {
    return this.http.get<Pilot>(url);
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
