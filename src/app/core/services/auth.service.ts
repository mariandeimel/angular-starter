import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {}

  logout() {}

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('authorizationToken')
  }

  public getAuthorizationToken(): string {
    const token = localStorage.getItem('authorizationToken')
    return token ? token : ''
  }

  public clearToken() {
    localStorage.removeItem('authorizationToken')
    localStorage.removeItem('currentUser')
  }
}
