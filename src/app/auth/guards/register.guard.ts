import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, map } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

    canActivate(): Observable<boolean> {
      return this.authService.email$.pipe(
        map(emailExist => {
          if (emailExist) {
            return true;
          }
          this.router.navigate(['/auth/login']);
          return false;
        })
      );
    }
}
