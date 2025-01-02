import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: any[] = JSON.parse(localStorage.getItem('employees') || '[]');
  private lastId: number = this.employees.length > 0 
    ? Math.max(...this.employees.map(emp => emp.id)) 
    : 0;

  constructor() { }


  getEmployees() {
    return this.employees;
  }


  addEmployee(employee: any) {
    employee.id = ++this.lastId;
    this.employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

}
