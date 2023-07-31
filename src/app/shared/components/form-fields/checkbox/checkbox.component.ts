import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
  
  @Input({ required: true }) identifier!: string
  @Input() checked: boolean = false

  @Output() valueChangeEvent = new EventEmitter<boolean>()

  toggleChecked() {
    this.checked = !this.checked
    this.valueChangeEvent.emit(this.checked)
  }
}
