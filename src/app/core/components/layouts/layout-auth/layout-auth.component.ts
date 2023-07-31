import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TextGradientComponent } from '@shared/components/typography/text-gradient/text-gradient.component';
import { HeadlineOneComponent } from '@shared/components/headlines/headline-one/headline-one.component';

@Component({
  selector: 'app-layout-auth',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadlineOneComponent, TextGradientComponent],
  templateUrl: './layout-auth.component.html',
  styleUrls: ['./layout-auth.component.scss']
})
export class LayoutAuthComponent {

}
