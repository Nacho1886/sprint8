import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate, CanLoad {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  isFalse() {
    this.router.navigate(['/starships'])
    return false
  }

  canLoad(): Observable<boolean> {
    return this.authService.user.pipe(
      map(userExist => !userExist ? true : this.isFalse())
    )
  }
  canActivate(): Observable<boolean> {
    return this.authService.user.pipe(
      map(userExist => !userExist ? true : this.isFalse())
    )
  }
}
