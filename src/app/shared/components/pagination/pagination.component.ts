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
  @Input({ required: true }) pageSize: number = 20
  @Input({ required: true }) currentPage: number = 1
  @Output() pageChangeEvent = new EventEmitter<number>()

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize)
  }

  get upperBound(): number {
    if (this.currentPage * this.pageSize > this.totalCount) return this.totalCount
    return this.currentPage * this.pageSize
  }

  get displayedPages(): (number | null)[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const boundary = 2;  // Anzahl der Seiten um die aktuelle Seite

    const array: (number | null)[] = [];

    // Erste Seite und ggf. Auslassungspunkte
    array.push(1);
    if (current - boundary > 2) {
      array.push(null); // für "..."
    }

    // Seiten um die aktuelle Seite
    for (let i = Math.max(2, current - boundary); i <= Math.min(total - 1, current + boundary); i++) {
      array.push(i);
    }

    // Letzte Seite und ggf. Auslassungspunkte
    if (current + boundary < total - 1) {
      array.push(null); // für "..."
    }
    if (total > 1) {
      array.push(total);
    }

    return array;
  }

  changePage(newPage: number): void {
    if (newPage > 0 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.pageChangeEvent.emit(newPage);
    }
  }
}
