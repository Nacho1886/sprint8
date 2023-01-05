import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  
  userExist: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.user.subscribe(obs => obs ? this.userExist = true : this.userExist = false )
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