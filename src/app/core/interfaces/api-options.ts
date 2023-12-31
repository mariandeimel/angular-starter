import { SortDirection } from '@angular/material/sort'

export interface ApiOptions {
  page: number
  pageSize: number
  order?: { [key: string]: SortDirection }
  filter?: { [key: string]: any }
  search?: string
}
