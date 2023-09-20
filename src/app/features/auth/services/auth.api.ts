import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '@environment/environment.development'
import { Observable, map } from 'rxjs'
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  apiUrl = environment.apiUrl
  sanctumUrl = environment.sanctumUrl

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.http
      .post(`${this.apiUrl}/login`, { username: email, password: password })
      .pipe(map((response: any) => response as User))
  }

  getCsrfToken(): Observable<any> {
    return this.http.get(`${this.sanctumUrl}/csrf-token`)
  }

  getUser(): Observable<User> {
    return this.http
      .get(`${this.apiUrl}/user`)
      .pipe(map((response: any) => response as User))
  }
}
