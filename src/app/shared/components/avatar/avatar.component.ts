import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {
  @Input() src: string | null = null
  @Input() color: string = 'text-cyan-400'
  @Input() height: string = 'h-12'
  @Input() width: string = 'w-12'
  @Input() iconSize: string = 'text-xl'
  @Input() icon: string = 'fas fa-question'
}
