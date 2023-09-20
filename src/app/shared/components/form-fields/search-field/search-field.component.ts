import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../input-field/input-field.component';
import { Subject, debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
  searchInputChanged = new Subject<string>()

  @Output() searchEvent = new EventEmitter<string>()

  constructor() {
    this.searchInputChanged.pipe(debounceTime(500), takeUntilDestroyed()).subscribe(value => this.searchEvent.emit(value))
  }

  onInputChange = (search: string) => this.searchInputChanged.next(search)
}
