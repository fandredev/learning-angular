import { Injectable } from '@angular/core';
import { Department } from './models';

enum DepartamentsName {
  Clothing,
  Books,
  Eletronics,
  Computers
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private next_id = 5

  private department: Department[] = [
    { id: 1, name: DepartamentsName[DepartamentsName.Clothing] },
    { id: 2, name: DepartamentsName[DepartamentsName.Books] },
    { id: 3, name: DepartamentsName[DepartamentsName.Eletronics] },
    { id: 4, name: DepartamentsName[DepartamentsName.Computers] }
  ]
  constructor() { }

  getDepartaments(): Department[] {
    return this.department
  }

  addDepartaments(t: Department): void {
    this.department.push({ id: this.next_id++, ...t })
    console.log(this.department)
  }

  getDepartamentById(_id: number): any {
    return this.department.find(({ id }) => id === _id)
  }
}
