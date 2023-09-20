import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-base-skeleton',
  template: '',
  standalone: true,
})
export abstract class BaseSkeletonComponent {
  @Input() numberItems: number = 20
}
