import { Injectable } from '@angular/core'
import { Identifiable } from '@core/interfaces/identifiable'
import { PaginatedResult } from '@core/interfaces/paginated-result'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class MockApiService<T extends Identifiable> {
  database: T[] = []

  index(): Observable<PaginatedResult<T>> {
    return this.mockNetworkCall({
      items: this.database,
      totalCount: this.database.length,
    }) // return dummy data
  }

  create(enitity: T): Observable<T> {
    enitity.id = Date.now() //generate a unique id for the object
    this.database.push(enitity) //push the newly created object to master list
    return this.mockNetworkCall(enitity) //mocking the network call by adding delay of 1 sec and returning the newly added hero object
  }

  update(id: number | string, entity: T): Observable<T> {
    const index = this.database.findIndex(filter => filter.id == id) // find the index of hero to be updated
    this.database[index] = entity //update the old object with new updated object
    return this.mockNetworkCall(entity) //mocking the network call by adding delay of 1 sec and returning the new list
  }

  delete(id: number | string): Observable<T> {
    const index = this.database.findIndex(filter => filter.id == id) // find the index of hero to be removed
    this.database.splice(index, 1) //remove the old object
    return this.mockNetworkCall({}) //mocking the network call by adding delay of 1 sec and returning the new list
  }

  //mocking the network call by adding delay of 1 sec and returning the passed value
  mockNetworkCall(valueToReturn: any): Observable<any> {
    return Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(valueToReturn)
        observer.complete()
      }, 1000) //adding 1 sec delay
    })
  }
}
