import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    const body = { username, password };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<string>('api/login', body, httpOptions);
  }

  // Method to store the token in local storage
  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
    this.loggedIn = true;
  }

  // Method to remove the token from local storage
  logout(): void {
    localStorage.removeItem('authToken');
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
