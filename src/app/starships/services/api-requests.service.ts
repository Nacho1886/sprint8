import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarshipsPage } from '../interfaces/StarshipsPage';
import { Starship } from '../interfaces/Starship';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(private http: HttpClient) { 
    
  }

  getStarshipsPageApi(): Observable<StarshipsPage> {
    return this.http.get<StarshipsPage>('https://swapi.dev/api/starships/')
  }
  getStarshipApi(url: string): Observable<Starship> {
    return this.http.get<Starship>(url)
  }
}
