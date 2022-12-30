import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, of } from 'rxjs';
import { Account } from '../interfaces/account';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: User | undefined;
  public userSaved: Observable<boolean> = of(false);
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  private _urlJsonServer: string = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {
    this._user = JSON.parse(localStorage.getItem('User')!)
    console.log();
    
    
  }

  validateAccount(email: string): Observable<Account> {
    return this.http.get<Account>(this._urlJsonServer + email).pipe(
      tap(({ id, name }) => {
        this.userSaved.subscribe((bool) => {
          if (bool) {
            console.log("🚀 ~ file: auth.service.ts:24 ~ AuthService ~ this.userSaved.subscribe ~ bool", bool)
            this._user = {
              id: id,
              name: name,
            };
            localStorage.setItem('User', JSON.stringify(this._user));
          }
        });
      })
    );
  }

  // login(email: string, password: string): Observable<User> {}
}
