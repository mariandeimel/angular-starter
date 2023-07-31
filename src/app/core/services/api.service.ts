import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ApiOptions } from '@core/interfaces/api-options'
import { PaginatedResult } from '@core/interfaces/paginated-result'
import { environment } from '@environment/environment.development'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export abstract class ApiService<T> {

  abstract readonly endpoint: string
  private readonly apiUrl = environment.apiUrl
  readonly includeEntities = 'includeEntities'
  readonly headers = new HttpHeaders().set('Content-Type', 'application/ld+json')


  get url(): string {
    return `${this.apiUrl}/${this.endpoint}`
  }

  constructor(public http: HttpClient) { }

  index(options: ApiOptions): Observable<PaginatedResult<T>> {

    let query = ''

    if (options.page) query += `page=${options.page}&`
    if (options.itemsPerPage) query += `itemsPerPage=${options.itemsPerPage}&`

    if (options.order) {
      for (let field in options.order) {
        query += `order[${field}]=${options.order[field]}&`
      }
    }

    if (options.filter) {
      for (let field in options.filter) {
        query += `${field}=${options.filter[field]}&`
      }
    }

    return this.http.get(`${this.url}/${this.includeEntities}/?${query}`, { withCredentials: true, headers: this.headers }).pipe(
      map((response: any) => {
        return {
          items: response['hydra:member'] as T[],
          totalCount: response['hydra:totalItems'] as number
        }
      }),
    )
  }

  show(id: number, includeEntities = false): Observable<T> {
    const url = includeEntities ? `${this.url}/${id}/${this.includeEntities}` : `${this.url}/${id}`;
    return this.http.get(url, { withCredentials: true, headers: this.headers }).pipe(
      map(response => response as T),
    )
  }

  create(data: T, includeEntities = false): Observable<T> {
    const url = includeEntities ? `${this.url}/${this.includeEntities}` : this.url;
    return this.http.post(url, data, { withCredentials: true, headers: this.headers }).pipe(
      map(response => response as T),
    )
  }

  update(id: number, data: T, includeEntities = false): Observable<T> {
    const url = includeEntities ? `${this.url}/${id}/${this.includeEntities}` : `${this.url}/${id}`;
    return this.http.put(url, data, { withCredentials: true, headers: this.headers }).pipe(
      map(response => response as T),
    )
  }

  delete(id: number, includeEntities = false): Observable<any> {
    const url = includeEntities ? `${this.url}/${id}/${this.includeEntities}` : `${this.url}/${id}`;
    return this.http.delete(url, { withCredentials: true, headers: this.headers }).pipe(
      map(response => response as any),
    )
  }

}
