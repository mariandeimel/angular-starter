import { Injectable, WritableSignal, signal } from '@angular/core'
import { Layout } from '@core/enums/layout'

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  layout = signal(Layout.DEFAULT)

  setLayout(layout: Layout) {
    this.layout.set(layout)
  }
}
