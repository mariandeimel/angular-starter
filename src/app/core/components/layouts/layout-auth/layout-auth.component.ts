import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadlineOneComponent } from '@shared/components/headlines/headline-one/headline-one.component';

@Component({
  selector: 'app-layout-auth',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadlineOneComponent],
  templateUrl: './layout-auth.component.html',
})
export class LayoutAuthComponent {

}
