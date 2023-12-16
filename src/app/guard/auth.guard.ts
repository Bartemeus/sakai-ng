import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = this.authService.getToken();

    if (token) {
      // Verify the token validity here (e.g., token expiration, signature validation)
      // You may use a library like `jwt-decode` or Angular JWT to decode and validate the token
      // If the token is valid, allow access
      return true;
    } else {
      // If there's no token or it's invalid, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
