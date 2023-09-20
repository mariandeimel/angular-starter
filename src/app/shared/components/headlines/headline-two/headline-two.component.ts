import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-headline-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headline-two.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadlineTwoComponent {}
