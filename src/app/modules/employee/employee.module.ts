import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFormComponent } from '../../components/add-form/add-form.component';
import { FormComponent } from '../../components/form/form.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';



@NgModule({
  declarations: [AddFormComponent],
  imports: [
    CommonModule, 
    FormComponent,
    InputComponent,
    ButtonComponent
  ],
  exports: [AddFormComponent]
})
export class EmployeeModule { }
