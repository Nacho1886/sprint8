import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StarshipsPage } from '../interfaces/StarshipsPage';
import { Starship } from '../interfaces/Starship';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  urlStarshipsApi:        string = 'https://swapi.dev/api/starships/'
  urlImagesStarshipsApi:  string = 'https://starwars-visualguide.com/assets/img/starships/'
  myUrlStarshipsApi:      string = 'https://starships-star-wars-default-rtdb.europe-west1.firebasedatabase.app/starships/'
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

  getImageStarshipApi(id: string): Observable<string> {
    return this.http.get<string>(this.myUrlStarshipsApi + id)
  }
}
//this.http.get<string>(this.urlImagesStarshipsApi + id + '.jpg') || 