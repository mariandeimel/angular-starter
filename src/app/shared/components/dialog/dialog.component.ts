import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { IconButtonComponent } from '@shared/components/buttons/icon-button/icon-button.component'
import { HeadlineTwoComponent } from '@shared/components/headlines/headline-two/headline-two.component'
import { DefaultButtonComponent } from '@shared/components/buttons/default-button/default-button.component'
import { MatProgressBarModule } from '@angular/material/progress-bar'

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    IconButtonComponent,
    HeadlineTwoComponent,
    DefaultButtonComponent,
    MatProgressBarModule,
  ],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  @Input() title: string

  @Input() submitButtonTitle: string = 'Save'
  @Input() warnButtonTitle: string = 'Cancel'

  @Input() loading: boolean = false
  @Input() error: string | null = null

  @Output() submitEvent = new EventEmitter<void>()
  @Output() deleteEvent = new EventEmitter<void>()

  onSubmit = () => {
    this.submitEvent.emit()
  }

  onDelete = () => {
    this.deleteEvent.emit()
  }
}
