import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlJsonServer:  string = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  validateUser(email: string): Observable<User> {
    return this.http.get<User>(this.urlJsonServer + email)
  }
}
