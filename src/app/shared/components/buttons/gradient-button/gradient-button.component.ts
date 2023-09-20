import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-gradient-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gradient-button.component.html',
})
export class GradientButtonComponent {
  @Input() stretch = false
  @Input() loading = false
  @Input() from = 'group-hover:from-teal-300 from-teal-300'
  @Input() to = 'group-hover:to-sky-600 to-sky-500'

  @Output() clickEvent = new EventEmitter<void>()

  buttonClicked(): void {
    this.clickEvent.emit()
  }
}
