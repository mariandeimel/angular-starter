import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-layout-default',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './layout-default.component.html',
})
export class LayoutDefaultComponent {}
