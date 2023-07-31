import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-table.component.html',
  styleUrls: ['./skeleton-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonTableComponent {
  @Input() numberItems: number = 10
}
