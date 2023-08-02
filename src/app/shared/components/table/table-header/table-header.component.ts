import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '@shared/components/form-fields/input-field/input-field.component';
import { ButtonGradientOutlineComponent } from '@shared/components/buttons/button-gradient-outline/button-gradient-outline.component';
import { DefaultButtonComponent } from '@shared/components/buttons/default-button/default-button.component';
import { Subject, debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [CommonModule, InputFieldComponent, ButtonGradientOutlineComponent, DefaultButtonComponent],
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableHeaderComponent {
  @Output() searchEvent = new EventEmitter<string>()

  searchInputChanged = new Subject<string>()

  constructor() {
    this.searchInputChanged.pipe(debounceTime(300), takeUntilDestroyed()).subscribe(value => this.searchEvent.emit(value))
  }

  onInputChange(search: string) {
    this.searchInputChanged.next(search)
  }
}
