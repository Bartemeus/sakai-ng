import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private protectedRoutes: string[] = ['/api/private', '/api/protected']; // Массив защищенных маршрутов

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Check if the request URL requires Authorization
    if (this.needsAuthorization(request.url)) {
      // Get the token from wherever you store it (e.g., localStorage)
      const token = localStorage.getItem('token'); // Подставьте ваш механизм получения токена

      // If the token exists, add it to the header
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }

    return next.handle(request);
  }

  // Function to determine if the request needs Authorization
  private needsAuthorization(url: string): boolean {
    // Check if the URL matches any of the protected routes
    return this.protectedRoutes.some(route => url.includes(route));
  }
}
