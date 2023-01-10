import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanLoad, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  isFalse() {
    this.router.navigate(['/auth/email-adress'])
    return false
  }

  isTrue() {
    this.router.navigate(['/starships'])
    return false
  }
  isValid() {
    this.router.navigate(['/starships'])
    return true
  }

  canLoad(): Observable<boolean> {
    return this.authService.user.pipe(
      map(userExist => userExist ? this.isTrue() : this.isFalse())
    )
  }
  canActivate(): Observable<boolean> {
    return this.authService.user.pipe(
      map(userExist => userExist ? this.isTrue() : this.isFalse())
    )
  }
}