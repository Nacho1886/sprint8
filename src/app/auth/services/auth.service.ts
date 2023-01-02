import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, share } from 'rxjs';
import {LocalStorageService } from 'ngx-webstorage';

import { Account } from '../interfaces/account';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user$: BehaviorSubject<User | undefined>

  
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  private _urlJsonServer: string = 'http://localhost:3000/users/';

  constructor(
    private http: HttpClient,
    private localSt: LocalStorageService
    ) {
      this._user$ = new BehaviorSubject<User | undefined>(this.localSt.retrieve('user') ?? undefined);
      this.localSt.observe('user').subscribe((value) => this._user$.next(value))
  }
  
  get user(): Observable<User | undefined> { return this._user$.pipe(share()) }


  validateEmail(email: string): Observable<Account> {
    return this.http.get<Account>(this._urlJsonServer + email)
  }

  validatePassword(email: string, password: string): Observable<User | undefined> {
    return this.http.get<Account>(this._urlJsonServer + email).pipe(
      map(user => {
        if (user && user.password === password) 
        return { id: user.id, name: user.name }
        return undefined
      })
    )
  }

  login(localSt: LocalStorageService, user: User | undefined) { localSt.store('user', user) }
  
  logout(localSt: LocalStorageService) { this.localSt.clear('user') }
}
