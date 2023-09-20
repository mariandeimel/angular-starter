import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconButtonComponent } from '@shared/components/buttons/icon-button/icon-button.component'

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  templateUrl: './accordion-item.component.html',
})
export class AccordionItemComponent {
  @Input() first: boolean = false
  @Input() last: boolean = false

  @Output() actionEvent = new EventEmitter<void>()

  expanded = false

  toggle = () => {
    this.expanded = !this.expanded
  }

  onClick = () => {
    this.actionEvent.emit()
  }
}
