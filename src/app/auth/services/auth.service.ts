import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap, of, fromEvent } from 'rxjs';
import { Account } from '../interfaces/account';
import { User } from '../interfaces/user';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: User | undefined
  userData!: Observable<User | undefined>
  
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  private _urlJsonServer: string = 'http://localhost:3000/users/';

  constructor(
    private http: HttpClient,
    private localSt: LocalStorageService
    ) {
    this._user = this.localSt.retrieve('user') ?? undefined
    this.localSt.observe('User').subscribe((value) => {this._user = value
      console.log(this.user)
    })
    
  }
  
  get user(): User | undefined {
    return this._user;
  }

  validateEmail(email: string): Observable<Account> {
    return this.http.get<Account>(this._urlJsonServer + email)
  }

  validatePassword(email: string, password: string): Observable<User | undefined> {
    return this.http.get<Account>(this._urlJsonServer + email).pipe(
      map(user => {
        if (user && user.password === password) return {
          id: user.id,
          name: user.name,
        }
        return undefined
      }
      )
    )
  }

  login(localSt: LocalStorageService, user: User | undefined) {
    localSt.store('user',user)
  }
  
  logout(localSt: LocalStorageService) {
    localSt.clear('user')

  }

  

}
