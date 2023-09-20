import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultButtonComponent } from '@shared/components/buttons/default-button/default-button.component';
import { SearchFieldComponent } from '@shared/components/form-fields/search-field/search-field.component';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [CommonModule, DefaultButtonComponent, SearchFieldComponent],
  templateUrl: './table-header.component.html',
})
export class TableHeaderComponent {
  @Input() disabledDelete: boolean = false
  @Input() hideSearch: boolean = false
  @Input() hideAdd: boolean = false

  @Output() searchEvent = new EventEmitter<string>()
  @Output() addEvent = new EventEmitter<void>()
  @Output() removeEvent = new EventEmitter<void>()

  onSearch = (search: string) => this.searchEvent.emit(search)
  onAddClick = () => this.addEvent.emit()
  onRemoveClick = () => this.removeEvent.emit()
}
