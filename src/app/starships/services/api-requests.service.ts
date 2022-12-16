import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarshipsPage } from '../interfaces/StarshipsPage';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(private http: HttpClient) { 
    
  }

  get starshipsPageApi(): Observable<StarshipsPage> {
    return this.http.get<StarshipsPage>('https://swapi.dev/api/starships/')
  }
}
