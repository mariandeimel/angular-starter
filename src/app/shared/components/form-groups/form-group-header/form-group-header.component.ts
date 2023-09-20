import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '@shared/components/buttons/icon-button/icon-button.component';

@Component({
  selector: 'app-form-group-header',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  templateUrl: './form-group-header.component.html',
})
export class FormGroupHeaderComponent {

}
