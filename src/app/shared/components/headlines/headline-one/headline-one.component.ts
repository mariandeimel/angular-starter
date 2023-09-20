import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headline-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headline-one.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadlineOneComponent {
}
