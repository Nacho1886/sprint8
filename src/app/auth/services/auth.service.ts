import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, catchError, map, share, tap } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

import { Account } from '../interfaces/account';
import { User } from '../interfaces/user';
import { AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public email$: BehaviorSubject<string>
  private _user$: BehaviorSubject<User>


  public emailPattern: RegExp = /^[a-z0-9.%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/
  public passwordPattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
  public namePattern: RegExp = /^[A-Za-z]+$/


  private _urlJsonServer: string = 'http://localhost:3000/users/';

  constructor(
    private http: HttpClient,
    private router: Router,
    private localSt: LocalStorageService
  ) {
    this.email$ = new BehaviorSubject('')
    this._user$ = new BehaviorSubject(this.localSt.retrieve('user') ?? undefined)
    this.localSt.observe('user').subscribe((value) => this._user$.next(value))
  }

  get user(): Observable<User | undefined> { return this._user$.asObservable().pipe(share()) }


  validateExistEmail(email: string): Observable<Account> {
    this.email$.next(email)
    return this.http.get<Account>(this._urlJsonServer + email).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
          this.router.navigate(['/auth/register'])
          throw 'Preparing new account'
        }
        throw err
      })
    )
  }

  authPasswordUser(password: string): Observable<User | undefined> {
    
    const email: string = this.email$.getValue()

    return this.http.get<Account>(this._urlJsonServer + email).pipe(
      map(user => {
        if (user && user.password === password)
          return { id: user.id, name: user.name, lastname: user.lastname }
        return undefined
      })
    )
  }


  createNewAccount(form: FormGroup) {
    const { email, name, lastname, password } = form.value
    const newAccount: Account = {
      id: email,
      name: name,
      lastname: lastname,
      password: password
    }
    this.http.post(this._urlJsonServer, newAccount).subscribe({
      next: (response) => {
        console.log('POST request is successful ', response);
      },
      error: (error) => {
        console.log('Error', error);
      }
    })
  }

  deleteEmail() {
    this.email$.next('')
  }

  login(localSt: LocalStorageService, user: User | undefined) { localSt.store('user', user) }

  logout(localSt: LocalStorageService) {
    localSt.clear('user')
    const firstPath = this.router.routerState.snapshot.root.firstChild?.url[0].path
    if (firstPath === 'starships') this.router.navigate(['/home'])
  }
}
