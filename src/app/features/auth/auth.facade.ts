
import { Injectable } from '@angular/core';
import { AuthApi } from './services/auth.api';
import { AuthState } from './state/auth.state';
import { Observable, finalize, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './interfaces/user';


@Injectable({ providedIn: 'root' })
export class AuthFacade {

  public readonly LOGIN_PATH = 'auth/login';

  constructor(private api: AuthApi, private state: AuthState, private router: Router) { }

  // MARK: - API
  login(username: string, password: string): void {
    this.state.loading.set(true)

    this.api.login(username, password).pipe(
      finalize(() => {
        this.state.loading.set(false)
      })
    ).subscribe({
      next: (response: User) => {
        this.state.setUser(response)
        this.router.navigate([''])
      },
      error: error => {
        this.state.error.set(error.error.message)
      },
    })
  }

  logout(): void {
  }

  getCurrentUser$(): Observable<User | undefined> {
    return (this.state.user()) ? of(this.state.user()) : this.api.getUser().pipe(tap(response => this.state.setUser(response)))
  }


  removeCurrentUser = (): void => this.state.removeUser()

  isLoggedIn$ = (): Observable<boolean> => {
    return this.getCurrentUser$().pipe(map(user => !!user));
  }

  getLoading$ = (): Observable<boolean> => this.state.loading$
  getError$ = (): Observable<string | null> => this.state.error$
}