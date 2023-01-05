import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  
  userExist: boolean = false


  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.user.subscribe(obs =>
      {obs ? this.userExist = true : this.userExist = false
      console.log("🚀 ~ file: auth.guard.ts:21 ~ AuthGuard ~ this.userExist", this.userExist)
      }
      )
    
  }
  canLoad(): boolean {
    if (this.userExist) return true
    this.router.navigate(['/auth/login'])
    return false
  }
  canActivate(): boolean {
    if (this.userExist) return true
    this.router.navigate(['/auth/login'])
    return false
  }
}
  
  /* canActivate(): Observable<boolean> {
    return this.user.pipe(
      map(user => {
        if (!user) {
          this.router.navigate(['/auth/login']);
          return false;
        }
        return true;
      })
    );
  } */

  /* canLoad(): Observable<boolean> {
    return this.user.pipe(
      map(user => {
        if (!user) {
          this.router.navigate(['/auth/login']);
          return false;
        }
        return true;
      })
    );
  } */
  

  /* canLoad(): boolean {
    let userExist: boolean = true
    this.user.subscribe(user => {
      if (!user){ userExist = false}
      else {this.router.navigate(['/auth/login'])}
    })
    return userExist
  } */
  /* canActivate(): Observable<boolean> {
    return this.user.pipe(
      map(userExist => {
        if (!userExist) {
          this.router.navigate(['/auth/login'])
          return false
        }
        return true
      })
    )
  }

  canLoad(): Observable<boolean> {
    return this.user.pipe(
      map(userExist => {
        if (!userExist) {
          this.router.navigate(['/auth/login'])
          return false
        }
        return true
      })
    )
  } */
