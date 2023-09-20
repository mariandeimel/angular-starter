import { HttpClient } from '@angular/common/http'
import { ApiOptions } from '@core/interfaces/api-options'
import { PaginatedResult } from '@core/interfaces/paginated-result'
import { environment } from '@environment/environment.development'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export abstract class ApiService<T> {

  abstract readonly endpoint: string
  private readonly apiUrl = environment.apiUrl
  readonly includeEntities = 'includeEntities'

  get url(): string {
    return `${this.apiUrl}/${this.endpoint}`
  }

  constructor(public http: HttpClient) { }

  index(options: ApiOptions): Observable<PaginatedResult<T>> {
    let queryParts = []

    if (options.page) queryParts.push(`page=${options.page}`)
    if (options.pageSize) queryParts.push(`pageSize=${options.pageSize}`)
    if (options.search) queryParts.push(`search=${encodeURIComponent(options.search)}`)

    if (options.order) {
      for (let field in options.order) {
        queryParts.push(`order[${field}]=${options.order[field]}`)
      }
    }

    if (options.filter) {
      for (let field in options.filter) {
        queryParts.push(`${field}=${options.filter[field]}`)
      }
    }

    let query = queryParts.join('&')

    return this.http.get(`${this.url}/?${query}`).pipe(
      map((response: any) => {
        return {
          items: response['member'] as T[],
          totalCount: response['totalItems'] as number
        }
      }),
    )
  }

  show(id: number): Observable<T> {
    return this.http.get(`${this.url}/${id}`).pipe(
      map(response => response as T),
    )
  }

  create(data: T): Observable<T> {
    return this.http.post(this.url, data).pipe(
      map(response => response as T),
    )
  }

  update(id: number, data: T): Observable<T> {
    return this.http.put(`${this.url}/${id}`, data).pipe(
      map(response => response as T),
    )
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      map(response => response as any),
    )
  }

}
