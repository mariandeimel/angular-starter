import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-gradient-outline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-gradient-outline.component.html',
  styleUrls: ['./button-gradient-outline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGradientOutlineComponent {
  @Input() stretch = false
  @Input() loading = false
  @Input() from = 'group-hover:from-pink-500 from-pink-500'
  @Input() to = 'group-hover:to-yellow-500 to-yellow-500'

  @Output() clickEvent = new EventEmitter<void>()

  buttonClicked(): void {
    this.clickEvent.emit()
  }
}
