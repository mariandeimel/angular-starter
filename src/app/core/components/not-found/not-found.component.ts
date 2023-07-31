import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextGradientComponent } from '@shared/components/typography/text-gradient/text-gradient.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, TextGradientComponent],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

}
