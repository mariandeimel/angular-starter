import { Injectable, signal } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop'
import { MatDrawerMode } from '@angular/material/sidenav'
import { Subject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class SidenavService {
  sidebarVisible = signal(false)
  drawerMode = signal<MatDrawerMode>('side')

  $sidebarVisible = toObservable(this.sidebarVisible)
  $drawerMode = toObservable(this.drawerMode)

  $sidenavChanged = new Subject<void>()

  setSidebarVisible = (visible: boolean) => this.sidebarVisible.set(visible)
  changeDrawerMode = (mode: MatDrawerMode) => this.drawerMode.set(mode)

  sidenavChanged = () => this.$sidenavChanged.next()
}
