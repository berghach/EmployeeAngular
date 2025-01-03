import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() action: string = '';
  @Input() method: string = 'POST';
  @Input() title: string = '';

  @Output() valueChange: EventEmitter<string | number> = new EventEmitter();
  
  onInputChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
