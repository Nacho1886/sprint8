import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Account } from '../interfaces/account';
import { User } from '../interfaces/user';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AsyncValidator {
  _user: User | undefined;
  public email: string | undefined
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  private _urlJsonServer: string = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {
    this._user = JSON.parse(localStorage.getItem('User')!)
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
      })
    )
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.get<ValidationErrors | null>(this._urlJsonServer + this.email).pipe(
      map((res) => {
        return res!["password"] === control.value ? null : { incorrectPassword: true }
      }
      )
    )
  }
  /* registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  } */

}
