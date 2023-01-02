import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, share, filter, shareReplay } from 'rxjs';
import {LocalStorageService } from 'ngx-webstorage';

import { Account } from '../interfaces/account';
import { User } from '../interfaces/user';
import { FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user$: BehaviorSubject<User | undefined>

  
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  private _urlJsonServer: string = 'http://localhost:3000/users/';

  constructor(
    private http: HttpClient,
    private router: Router,
    private localSt: LocalStorageService
    ) {
      this._user$ = new BehaviorSubject<User | undefined>(this.localSt.retrieve('user') ?? undefined);
      this.localSt.observe('user').subscribe((value) => this._user$.next(value))
  }
  
  get user(): Observable<User | undefined> { return this._user$.pipe(share()) }


  

  validateExistEmail(email: string): Observable<Account> {
    return this.http.get<Account>(this._urlJsonServer + email).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
          this.router.navigate(['/auth/register'])
        }
        throw err
      })
    )
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
  
  logout(localSt: LocalStorageService) { localSt.clear('user') }
}
