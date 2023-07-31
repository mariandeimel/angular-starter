import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputFieldComponent), multi: true }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFieldComponent {
  @Input() id: string = ''
  @Input() placeholder: string = ''
  @Input() type: string = 'text'

  @Input() showIcon: boolean = false
  @Input() direction: string = 'right'

  @Input() disabled: boolean = false
  @Input() autocomplete: boolean = true

  value: string = ''

  // Function to call when the input changes.
  onChange = (value: string) => { }

  // Function to call when the input is touched (when a blur event is fired).
  onTouched = () => { }

  // Allows Angular to update the model (on change).
  writeValue(value: string): void {
    this.value = value
  }

  // Allows Angular to register a change function. 
  // We'll call this function when the input value changes (in the template).
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  // Allows Angular to register a touched function. 
  // We'll call this function when the input element loses focus (on blur).
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }
}