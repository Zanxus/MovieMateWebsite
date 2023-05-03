import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'https://localhost:7008';
  private tokenKey = 'jwtToken';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    console.log(password,username);
    return this.http.post<{token: string}>(`${this.baseUrl}/api/Authentication/authenticate`, {username: username, password: password})
      .pipe(
        map(result => {
          if (result && result.token) {
            localStorage.setItem(this.tokenKey, result.token);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  register(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>(`${this.baseUrl}/api/Authentication/register`, {username: username, password: password})
      .pipe(
        map(result => {
          if (result && result.token) {
            localStorage.setItem(this.tokenKey, result.token);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
