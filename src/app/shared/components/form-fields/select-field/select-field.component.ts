import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectFieldComponent {
  @Input() options: string[] = []
  @Output() selected = new EventEmitter<string>()
  
  selectOption(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value
    this.selected.emit(selectedOption)
  }
}
