import { Routes } from '@angular/router'
import { DashboardComponent } from '@core/components/dashboard/dashboard.component'
import { NotFoundComponent } from '@core/components/not-found/not-found.component'
import { Layout } from '@core/enums/layout'
import { appGuard } from '@core/guards/app.guard'
import { authGuard } from '@core/guards/auth.guard'
import { setLayout } from '@core/resolvers/layout.resolver'

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    resolve: { layout: setLayout(Layout.ADMIN) },
    data: { breadcrumb: 'Dashboard' },
    component: DashboardComponent,
    canActivate: [appGuard],
  },
  {
    path: 'auth',
    title: 'Authentication',
    resolve: { layout: setLayout(Layout.AUTH) },
    loadChildren: () =>
      import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
    canActivate: [authGuard],
  },
  {
    path: '**',
    title: '404',
    resolve: { layout: setLayout(Layout.DEFAULT) },
    loadComponent: () => NotFoundComponent,
  },
]
