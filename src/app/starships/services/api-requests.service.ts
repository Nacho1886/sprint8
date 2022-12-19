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

  urlStarshipsApi: string = 'https://swapi.dev/api/starships/'
  page: number = 1

  constructor(private http: HttpClient) { }

  getStarshipsPageApi(): Observable<StarshipsPage> {
    return this.http.get<StarshipsPage>(this.urlStarshipsApi + '?page=' + this.page)
  }

  getStarshipApi(url: string): Observable<Starship> {
    return this.http.get<Starship>(url)
  }
}
