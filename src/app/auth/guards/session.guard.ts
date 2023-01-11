import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanLoad, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  isUser() {
    this.router.navigate(['/starships'])
    return false
  }
  isGuest() {
    this.router.navigate(['/auth/email-adress'])
    return false
  }

  isValid(path: string | undefined, userExist: User | undefined) {
    const userCantAuth = path === 'auth' && userExist
    const guestCantSeeShips = path === 'starships' && !userExist
    
    if (userCantAuth) return this.isUser()
    if (guestCantSeeShips) return this.isGuest()
    return true
  }

  canLoad({ path }: Route): Observable<boolean> {
    return this.authService.user.pipe(
      map(userExist => this.isValid(path, userExist))
    )
  }
  canActivate({ url }: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.user.pipe(
      map(userExist => this.isValid(url[0].path, userExist))
    )
  }
}

/* import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanLoad, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  isFalse() {
    this.router.navigate(['/auth/email-adress'])
    return false
  }

  canLoad(): Observable<boolean> {
    return this.authService.user.pipe(
      map(userExist => userExist ? true : this.isFalse())
    )
  }
  canActivate(): Observable<boolean> {
    return this.authService.user.pipe(
      map(userExist => userExist ? true : this.isFalse())
    )
  }
} */