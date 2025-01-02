import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() type: string = 'submit';

  @Output() valueChange: EventEmitter<string | number> = new EventEmitter();
  
  onInputChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
