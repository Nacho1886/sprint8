import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService implements AsyncValidator {

  public email: string | undefined
  private _urlJsonServer: string = 'http://localhost:3000/users/';



  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.get<ValidationErrors | null>(this._urlJsonServer + this.email).pipe(
      map((res) => {
        return res!["password"] === control.value ? null : { incorrectPassword: true }
      }
      )
    )
  }
}
