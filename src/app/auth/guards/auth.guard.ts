import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  
  user!: Observable<User | undefined>

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = this.authService.user
    this.user.subscribe(user => console.log(user))
  }
  canActivate(): Observable<boolean> {
    return this.user.pipe(
      map(user => {
        if (!user) {
          this.router.navigate(['/auth/login']);
          return false;
        }
        return true;
      })
    );
  }

  canLoad(): Observable<boolean> {
    return this.user.pipe(
      map(user => {
        if (!user) {
          this.router.navigate(['/auth/login']);
          return false;
        }
        return true;
      })
    );
  }
  /* canActivate(): boolean {
    let userExist: boolean = false
    this.user.subscribe(user => {
      if (user){ userExist = true}
      else {this.router.navigate(['/auth/login'])}
    })
    console.log("🚀 ~ file: auth.guard.ts:24 ~ AuthGuard ~ canActivate ~ userExist", userExist)
    return userExist
  }

  canLoad(): boolean {
    let userExist: boolean = false
    this.user.subscribe(user => {
      if (user){ userExist = true}
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
}
