import { Injectable } from '@angular/core'
import { Identifiable } from '@core/interfaces/identifiable'
import { StateService } from '@core/services/state.service'
import { ApiService } from '@core/services/api.service'
import { MockApiService } from '@core/services/mock-api.service'
import { finalize } from 'rxjs'
import { ApiOptions } from '@core/interfaces/api-options'

@Injectable({ providedIn: 'root' })
export class FacadesService<T extends Identifiable> {
  constructor(
    public state: StateService<T>,
    public api: ApiService<T>,
    public apiY: MockApiService<T>
  ) {}

  fetch(options: ApiOptions) {
    this.state.loading.set(true)

    this.api
      .index(options)
      .pipe(
        finalize(() => {
          this.state.loading.set(false)
        })
      )
      .subscribe({
        next: response => {
          this.state.fetch(response.items, response.totalCount)
        },
        error: error => {
          this.state.error.set(error.error.message)
        },
      })
  }

  create(item: T) {
    this.state.loading.set(true)

    this.api
      .create(item)
      .pipe(
        finalize(() => {
          this.state.loading.set(false)
        })
      )
      .subscribe({
        next: response => {
          this.state.create(response)
        },
        error: error => {
          this.state.error.set(error.error.message)
        },
      })
  }

  update(item: T) {
    this.state.loading.set(true)

    this.api
      .update(item.id, item)
      .pipe(
        finalize(() => {
          this.state.loading.set(false)
        })
      )
      .subscribe({
        next: response => {
          this.state.update(response)
        },
        error: error => {
          this.state.error.set(error.error.message)
        },
      })
  }

  delete(item: T) {
    this.state.loading.set(true)

    this.api
      .delete(item.id)
      .pipe(
        finalize(() => {
          this.state.loading.set(false)
        })
      )
      .subscribe({
        next: () => {
          this.state.remove(item)
        },
        error: error => {
          this.state.error.set(error.error.message)
        },
      })
  }

  getData$ = () => this.state.items$
  getTotalCount$ = () => this.state.totalCount$
  getLoading$ = () => this.state.loading$
  getError$ = () => this.state.error$
}
