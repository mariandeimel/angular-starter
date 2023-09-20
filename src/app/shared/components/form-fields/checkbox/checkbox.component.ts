import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true }],
})
export class CheckboxComponent {

  @Input({ required: true }) identifier: string

  @Output() valueChangeEvent = new EventEmitter<boolean>()

  private _checked: boolean = false

  private onChange: (value: boolean) => void
  private onTouched: () => void

  get checked() {
    return this._checked
  }

  @Input() set checked(value: boolean) {
    if (this._checked !== value) {
      this._checked = value
      if (this.onChange) {
        this.onChange(value)
      }
    }
  }

  writeValue(value: boolean): void {
    this.checked = value
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  toggleChecked() {
    this.checked = !this.checked;
    this.valueChangeEvent.emit(this.checked)
    if (this.onTouched) {
      this.onTouched()
    }
  }
}
