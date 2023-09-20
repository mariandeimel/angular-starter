import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteModule, _MatAutocompleteBase } from '@angular/material/autocomplete';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, MatAutocompleteModule],
  templateUrl: './input-field.component.html',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputFieldComponent), multi: true }],
})
export class InputFieldComponent {
  @Input() id: string = ''
  @Input() placeholder: string = ''
  @Input() type: string = 'text'

  @Input() showIcon: boolean = false
  @Input() direction: string = 'right'

  @Input() disabled: boolean = false

  @Output() typing = new EventEmitter<string>()

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

  onInput(value: string) {
    this.value = value
    this.onChange(value)
    this.typing.emit(value)
  }
}
