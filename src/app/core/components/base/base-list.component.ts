import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, effect, signal } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ApiOptions } from '@core/interfaces/api-options';
import { Identifiable } from '@core/interfaces/identifiable';
import { FacadesService } from '@core/services/facade.service';
import { TableConfig } from '@shared/components/table/table.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base-list',
  templateUrl: 'base-list.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export abstract class BaseListComponent<T extends Identifiable> implements OnInit {

  loading$?: Observable<boolean>
  error$?: Observable<string | null>
  data$?: Observable<T[]>
  totalCount$?: Observable<number>

  apiOptions = signal<ApiOptions>({ page: 1, itemsPerPage: 30 })

  tableConfig: TableConfig[] = []

  constructor(private facade: FacadesService<T>) {
    effect(() => this.facade.fetch(this.apiOptions()), { allowSignalWrites: true })
  }

  ngOnInit(): void {
    this.loading$ = this.facade.getLoading$()
    this.error$ = this.facade.getError$()
    this.data$ = this.facade.getData$()
    this.totalCount$ = this.facade.getTotalCount$()
  }

  onPageChange = (page: number): void => this.apiOptions.mutate((options) => options.page = page)

  onSearch = (search: string): void => this.apiOptions.mutate((options) => options.filter = { name: search })

  onSort = (sort: Sort): void => this.apiOptions.mutate((options) => options.order = { [sort.active]: sort.direction })
}