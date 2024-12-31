import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string | number | undefined = '';
  @Input() disabled: boolean = false;
  @Input() max: string | number | undefined = undefined;
  @Input() min: string | number | undefined = undefined;

  @Output() valueChange: EventEmitter<string | number> = new EventEmitter();

  onInputChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
