import { Injectable, signal } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop'
import { Identifiable } from '@core/interfaces/identifiable'

@Injectable({ providedIn: 'root' })
export class StateService<T extends Identifiable> {
  loading = signal(false)
  items = signal<T[]>([])
  totalCount = signal(0)
  error = signal<string | null>(null)

  items$ = toObservable(this.items)
  loading$ = toObservable(this.loading)
  totalCount$ = toObservable(this.totalCount)
  error$ = toObservable(this.error)

  fetch(items: T[], totalCount: number) {
    this.items.set(items)
    this.totalCount.set(totalCount)
  }

  create(item: T) {
    this.items.mutate(values => values.push(item))
    this.totalCount.mutate(value => value + 1)
  }

  remove(item: T) {
    this.items.mutate(values => values.filter(filter => filter!.id !== item.id))
    this.totalCount.mutate(value => value - 1)
  }

  update(item: T) {
    this.items.mutate(values => {
      const index = values.findIndex(filter => filter.id === item.id)
      values[index] = item
      return values
    })
  }
}
