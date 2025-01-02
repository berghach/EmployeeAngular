import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-input',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor{
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() formControlName: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  // @Input() value: string | number | undefined = '';
  @Input() disabled: boolean = false;
  @Input() max: string | number | undefined = undefined;
  @Input() min: string | number | undefined = undefined;

  private _value: string | number | undefined = '';
  @Output() valueChange: EventEmitter<string | number> = new EventEmitter();

  onInputChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }

  // Getter and setter for value
  get value(): string | number | undefined {
    return this._value;
  }

  set value(val: string | number | undefined) {
    if (val !== this._value) {
      this._value = val;
      this.onChange(val);
      this.valueChange.emit(val);
    }
  }

  // ControlValueAccessor methods
  onChange = (value: string | number | undefined) => {};
  onTouched = () => {};

  writeValue(value: string | number | undefined): void {
    this._value = value;
  }

  registerOnChange(fn: (value: string | number | undefined) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
