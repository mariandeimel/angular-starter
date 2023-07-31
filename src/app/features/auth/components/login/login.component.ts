import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@shared/components/cards/card/card.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthFacade } from '@features/auth/auth.facade';
import { User } from '@features/auth/interfaces/user';
import { AlertComponent } from '@shared/components/alerts/alert/alert.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, AlertComponent, CardComponent, LoginFormComponent,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading$: Observable<boolean> = this.auth.getLoading$()
  error$: Observable<string | null> = this.auth.getError$()

  constructor(private auth: AuthFacade) { }

  authenticate = (event: Partial<User>) => {
    this.auth.login(event.email ?? '', event.password ?? '')
  }
}
