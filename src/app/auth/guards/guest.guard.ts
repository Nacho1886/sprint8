import { Injectable } from '@angular/core';
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
}