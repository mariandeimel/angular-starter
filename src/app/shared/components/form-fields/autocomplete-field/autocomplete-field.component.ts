import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { InputFieldComponent } from '../input-field/input-field.component';
import { FacadesService } from '@core/services/facade.service';
import { Identifiable } from '@core/interfaces/identifiable';
import { Subject, debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-autocomplete-field',
  templateUrl: './autocomplete-field.component.html',
  imports: [CommonModule, MatAutocompleteModule, InputFieldComponent],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AutocompleteComponent,
    multi: true
  }]
})
export class AutocompleteComponent<T extends Identifiable> implements OnInit, ControlValueAccessor {

  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>

  filteredOptions: any[] = []

  private searchInputChanged = new Subject<string>()
  private lastValue: number | null = null

  @Input() displayProperty: string = 'name'
  @Input({ required: true }) facade: FacadesService<T>

  constructor() {
    this.searchInputChanged.pipe(takeUntilDestroyed(), debounceTime(500)).subscribe(search => {
      this.facade.fetch({ page: 1, pageSize: 50, search: search })
    })
  }

  ngOnInit(): void {
    this.setData$()

    this.facade.fetch({ page: 1, pageSize: 50 })
  }

  onInput = (search: string): void => {
    this.searchInputChanged.next(search)
  }

  writeValue(value: any): void {
    if (!this.filteredOptions.length && value !== null) {
      this.lastValue = value
      return
    }

    if (value !== null && this.searchInput) {

      // Finde die Option mit der gegebenen ID
      const selectedOption = this.filteredOptions.find(option => option['@id'] === value)

      // Wenn die Option gefunden wird, setze den Namen im Textfeld
      if (selectedOption) {
        this.searchInput.nativeElement.value = selectedOption[this.displayProperty]
      } else {
        // Andernfalls setze das Textfeld auf einen leeren Wert oder einen Standardwert
        this.searchInput.nativeElement.value = '';
      }
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  // Füge diese Methode hinzu, um den Wert zurückzugeben, wenn eine Option ausgewählt wird.
  optionSelected(option: any): void {
    // Setze den Namen im Textfeld
    this.searchInput.nativeElement.value = option[this.displayProperty]

    // Sende die ID an das Formular
    if (this.onChange) {
      this.onChange(option['@id'])
    }
  }

  private setData$ = (): void => {
    this.facade.getData$().subscribe(data => {
      this.filteredOptions = data

      if (this.lastValue === null) return
      this.writeValue(this.lastValue)
      this.lastValue = null  // Setzen Sie den Wert zurück, um ihn nicht erneut zu verwenden
    })
  }

  private onChange: (value: any) => void
  private onTouched: () => void
}