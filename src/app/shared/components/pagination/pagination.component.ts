import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input({ required: true }) totalCount: number = 0
  @Input({ required: true }) itemsPerPage: number = 20
  @Input({ required: true }) currentPage: number = 1
  @Output() pageChangeEvent = new EventEmitter<number>()

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.itemsPerPage)
  }

  changePage(newPage: number): void {
    if (newPage > 0 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.pageChangeEvent.emit(newPage);
    }
  }
}
