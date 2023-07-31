import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'password-reset',
    loadComponent: () => PasswordResetComponent,
  }
]
