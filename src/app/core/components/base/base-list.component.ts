import { CommonModule } from '@angular/common'
import { Component, OnInit, effect, signal } from '@angular/core'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { Sort } from '@angular/material/sort'
import { ApiOptions } from '@core/interfaces/api-options'
import { Identifiable } from '@core/interfaces/identifiable'
import { FacadesService } from '@core/services/facade.service'
import { ContentWrapperComponent } from '@shared/components/content-wrapper/content-wrapper.component'
import { PaginationComponent } from '@shared/components/pagination/pagination.component'
import { SkeletonTableComponent } from '@shared/components/skeletons/skeleton-table/skeleton-table.component'
import { TableHeaderComponent } from '@shared/components/table/table-header/table-header.component'
import { TableComponent, TableConfig } from '@shared/components/table/table.component'
import { Observable } from 'rxjs'


@Component({
  selector: 'app-base-list',
  templateUrl: 'base-list.component.html',
  imports: [CommonModule, TableComponent, PaginationComponent, SkeletonTableComponent, ContentWrapperComponent, TableHeaderComponent, MatDialogModule],
  standalone: true,
})
export abstract class BaseListComponent<T extends Identifiable> implements OnInit {

  abstract readonly detailPath: string

  loading$?: Observable<boolean>
  error$?: Observable<string | null>
  data$?: Observable<T[]>
  totalCount$?: Observable<number>

  selectedIds = signal<string[]>([])
  apiOptions = signal<ApiOptions>({ page: 1, pageSize: 30 })

  tableConfig: TableConfig[] = []

  constructor(private facade: FacadesService<T>, public dialog: MatDialog) {
    effect(() => this.facade.fetch(this.apiOptions()), { allowSignalWrites: true })
  }

  ngOnInit(): void {
    this.loading$ = this.facade.getLoading$()
    this.error$ = this.facade.getError$()
    this.data$ = this.facade.getData$()
    this.totalCount$ = this.facade.getTotalCount$()
  }

  onPageChange = (page: number): void => this.apiOptions.mutate((options) => options.page = page)

  onSearch = (search: string): void => this.apiOptions.mutate((options) => options.search = search)

  onSort = (sort: Sort): void => this.apiOptions.mutate((options) => options.order = { [sort.active]: sort.direction })

  onSelected = (event: any) => this.selectedIds.set(event)

  onAdd = () => console.log('onAdd')
}