import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '@shared/components/buttons/icon-button/icon-button.component';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {

}
