import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent {
  @Input() stretch = false
  @Input() loading = false
  @Input() type: 'primary' | 'secondary' | 'warn' = 'primary'
  @Input() disabled = false

  @Output() clickEvent = new EventEmitter<void>()

  buttonClicked(): void {
    this.clickEvent.emit()
  }
}
