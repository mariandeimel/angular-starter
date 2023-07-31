import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment.development';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthApi {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post(`${this.apiUrl}/json-login`, { username: email, password: password }, { withCredentials: true }).pipe(map((response: any) => response as User))
  }

  getUser(): Observable<User> {
    return this.http.get(`${this.apiUrl}/get-user`, { withCredentials: true }).pipe(map((response: any) => response as User))
  }
}
