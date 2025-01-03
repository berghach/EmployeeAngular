import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';
import { EmployeeModule } from './modules/employee/employee.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeAngular';
}
