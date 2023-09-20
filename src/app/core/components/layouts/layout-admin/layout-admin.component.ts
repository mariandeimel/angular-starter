import { Component, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from '@core/components/sidebar/sidebar.component'
import { NavbarComponent } from '@core/components/navbar/navbar.component'
import { RouterOutlet } from '@angular/router'
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav'
import { AuthFacade } from '@features/auth/auth.facade'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    NavbarComponent,
    MatSidenavModule,
  ],
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss'],
})
export class LayoutAdminComponent {
  sidebarVisible = signal(false)
  drawerMode = signal<MatDrawerMode>('side')

  constructor(
    private auth: AuthFacade,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletPortrait,
      ])
      .subscribe(result => {
        this.drawerMode.set(result.matches ? 'over' : 'side')
      })
  }

  logout() {
    this.auth.logout()
  }

  closedSidebar() {
    this.sidebarVisible.set(false)
  }
}
