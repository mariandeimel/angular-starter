import { Component, EventEmitter, Input, Output, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '@shared/components/form-fields/checkbox/checkbox.component';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';

export interface TableConfig {
  property: string
  name: string
  format?: (value: any) => any
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, MatSortModule],
  templateUrl: './table.component.html',
})
export class TableComponent {

  @Input({ required: true }) config!: TableConfig[]
  @Input({ required: true }) data: any[] = []
  @Input({ required: true }) path!: string

  @Output() sortChangedEvent = new EventEmitter<Sort>()
  @Output() selectChangeEvent = new EventEmitter<string[]>()

  selectedItems = signal<{ [key: string]: boolean }>({})
  allSelected = signal<boolean>(false)

  @ViewChild(MatSort) sort!: MatSort

  constructor(private router: Router) { }

  onSort(event: Sort) {
    this.sortChangedEvent.emit(event)
  }

  selectAll(event: boolean) {
    for (let item of this.data) {
      this.selectedItems.mutate(values => values[item.id] = event)
    }
    this.emitSelectedIds()
  }

  selectItem(event: boolean, id: string) {
    this.selectedItems.mutate(values => values[id] = event)
    this.emitSelectedIds()
  }

  emitSelectedIds() {
    const selectedItems = this.selectedItems()
    let selectedIds = Object.keys(selectedItems).filter(id => selectedItems[id])
    this.allSelected.set(selectedIds.length === this.data.length)

    this.selectChangeEvent.emit(selectedIds)
  }

  navigateToItem(id: string) {
    this.router.navigate([`/${this.path}/${id}`])
  }
}

