import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  standalone: false,
  // imports: [],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent implements OnInit{

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      job: ['', Validators.required],
      hiringDate: ['', Validators.required],
    });
  }

  onSubmit() {
     if (this.employeeForm.valid) {
      console.log('Form Submitted:', this.employeeForm.value);
      // Logic to handle form data
    } else {
      console.log('Form is invalid!');
    }
  }

}
