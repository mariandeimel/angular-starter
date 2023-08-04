import { Injectable } from "@angular/core"
import { ApiService } from "./api.service"
import { DetailStateService } from "./detail-state.service"
import { finalize } from "rxjs"
import { Identifiable } from "@core/interfaces/identifiable"

@Injectable({ providedIn: 'root' })
export class DetailFacadeService<T extends Identifiable> {

  constructor(public state: DetailStateService<T>, public api: ApiService<T>) { }

  show(id: number) {
    this.state.loading.set(true)

    this.api.show(id).pipe(
      finalize(() => {
        this.state.loading.set(false)
      })
    ).subscribe({
      next: (response) => {
        this.state.set(response)
      },
      error: (error) => {
        this.state.error.set(error.error.message)
      }
    })
  }

  update(item: T) {
    this.state.loading.set(true)

    this.api.update(item.id, item).pipe(
      finalize(() => {
        this.state.loading.set(false)
      })
    ).subscribe({
      next: (response) => {
        this.state.update(response)
      },
      error: (error) => {
        this.state.error.set(error.error.message)
      }
    })
  }

  delete(item: T) {
    this.state.loading.set(true)

    this.api.delete(item.id).pipe(
      finalize(() => {
        this.state.loading.set(false)
      })
    ).subscribe({
      next: () => {
        this.state.delete()
      },
      error: (error) => {
        this.state.error.set(error.error.message)
      }
    })
  }
}