import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BaseSkeletonComponent } from '../base-skeleton.component'

@Component({
  selector: 'app-skeleton-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonTableComponent extends BaseSkeletonComponent {}
