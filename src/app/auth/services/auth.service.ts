import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, catchError, map, share } from 'rxjs';
import {LocalStorageService } from 'ngx-webstorage';

import { Account } from '../interfaces/account';
import { User } from '../interfaces/user';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public email$: Subject<string | undefined>
  private _user$: BehaviorSubject<User | undefined>

  
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public namePattern = /^[A-Z][a-z]+$/;


  private _urlJsonServer: string = 'http://localhost:3000/users/';

  constructor(
    private http: HttpClient,
    private router: Router,
    private localSt: LocalStorageService
    ) {
      this.email$ = new Subject()
      this._user$ = new BehaviorSubject(this.localSt.retrieve('user') ?? undefined);
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

  passwordChecker(field1: string, field2:string) {
    return ( formGroup: AbstractControl) => {
      const pass1 = formGroup.get(field1)?.value
      const pass2 = formGroup.get(field2)?.value

      pass1 !== pass2 ? formGroup.get(field2)?.setErrors({ mustMatch: true }) : formGroup.get(field2)?.setErrors(null)
    }
  }
  
}
