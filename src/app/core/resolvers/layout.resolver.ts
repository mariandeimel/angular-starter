import { inject } from '@angular/core'
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Layout } from '@core/enums/layout'
import { LayoutService } from '@core/services/layout.service'

export const setLayout = (layout: Layout) => {
  return (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
    inject(LayoutService).setLayout(layout)
  }
}
