import { Injectable, signal } from '@angular/core'
import { User } from '@features/auth/interfaces/user'
import { toObservable } from '@angular/core/rxjs-interop'

@Injectable({ providedIn: 'root' })
export class AuthState {
  user = signal<User | undefined>(undefined)
  loading = signal(false)
  error = signal<string | null>(null)

  user$ = toObservable(this.user)
  loading$ = toObservable(this.loading)
  error$ = toObservable(this.error)

  setUser = (user: User) => this.user.set(user)
  removeUser = () => this.user.set(undefined)
}
