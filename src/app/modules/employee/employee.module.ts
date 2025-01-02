import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFormComponent } from '../../components/add-form/add-form.component';
import { FormComponent } from '../../components/form/form.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';



@NgModule({
  declarations: [AddFormComponent],
  imports: [
    CommonModule, 
    FormComponent,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [AddFormComponent],
  bootstrap: [AppComponent]
})
export class EmployeeModule { }
