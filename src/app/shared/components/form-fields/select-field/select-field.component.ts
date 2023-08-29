import { ChangeDetectorRef, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectFieldComponent),
    multi: true
  }]
})
export class SelectFieldComponent implements ControlValueAccessor {
  @Input() options: any[] = []
  @Output() selected = new EventEmitter<any>()

  @Input() value: string | undefined
  isDisabled: boolean | undefined

  private onChange = (value: any) => {}

  private onTouched = () => { }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }

  onSelectOption(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value;
    this.value = selectedOption
    this.onChange(selectedOption)
    this.onTouched()
  }
}
