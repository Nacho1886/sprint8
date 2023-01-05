import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivateChild {

  emailExist: string

  constructor(
    private router: Router,
    private authService: AuthService
    ) {
      this.emailExist = this.authService.email$.getValue()
      console.log("🚀 ~ file: register.guard.ts:18 ~ RegisterGuard ~ this.emailExist", this.emailExist)
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.emailExist) return true
      this.router.navigate(['/auth/login'])
      return false
  }
  
}
