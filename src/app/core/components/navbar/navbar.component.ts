import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, BreadcrumbComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input({ required: true }) sidebarVisible: boolean = false;
  @Output() sidebarToggleEvent = new EventEmitter<boolean>();

  toggleSidebar() {
    this.sidebarToggleEvent.emit(!this.sidebarVisible);
  }
}