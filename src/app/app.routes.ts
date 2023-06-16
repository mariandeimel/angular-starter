import { Routes } from '@angular/router';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { Layout } from '@core/enums/layout';
import { setLayout } from '@core/resolvers/layout.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: 'admin',
    title: 'Admin',
    resolve: { layout: setLayout(Layout.ADMIN) },
    loadComponent: () => import('./modules/admin/admin.component').then(m => m.AdminComponent),
  },
  {
    path: 'login',
    title: 'Login',
    resolve: { layout: setLayout(Layout.AUTH) },
    loadComponent: () => import('./modules/auth/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: '**',
    title: '404',
    resolve: { layout: setLayout(Layout.DEFAULT) },
    loadComponent: () => NotFoundComponent,
  },
];
