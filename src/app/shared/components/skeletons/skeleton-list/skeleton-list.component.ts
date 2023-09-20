import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSkeletonComponent } from '../base-skeleton.component';

@Component({
  selector: 'app-skeleton-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-list.component.html',
})
export class SkeletonListComponent extends BaseSkeletonComponent {
}
