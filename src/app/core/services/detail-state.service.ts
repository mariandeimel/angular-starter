import { Injectable, signal } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop'

@Injectable({ providedIn: 'root' })
export class DetailStateService<T> {
  loading = signal(false)
  item = signal<T | undefined>(undefined)
  error = signal<string | null>(null)

  item$ = toObservable(this.item)
  loading$ = toObservable(this.loading)
  error$ = toObservable(this.error)

  set(item: T) {
    this.item.set(item)
  }

  delete() {
    this.item.set(undefined)
  }

  update(item: T) {
    this.item.set(item)
  }
}
