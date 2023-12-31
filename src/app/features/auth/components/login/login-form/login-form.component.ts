import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  signal,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { InputFieldComponent } from '@shared/components/form-fields/input-field/input-field.component'
import { User } from '@features/auth/interfaces/user'
import { GradientButtonComponent } from '@shared/components/buttons/gradient-button/gradient-button.component'

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputFieldComponent,
    GradientButtonComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  hidePassword = signal(true)
  iconClass = computed(() => (this.hidePassword() ? 'fa-eye' : 'fa-eye-slash'))

  @Input() loading = false
  @Output() submitEvent = new EventEmitter<Partial<User>>()

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  constructor(private fb: NonNullableFormBuilder) {}

  submit(): void {
    this.submitEvent.emit(this.form.value)
  }
}
