import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departament-form',
  templateUrl: './departament-form.component.html',
})
export class DepartamentFormComponent {
  depName = ''

  constructor(private departamentService: DepartmentService) {
    console.log('Constructor departament');
  }

  save(): void {
    this.departamentService.addDepartaments({
      name: this.depName
    })
    this.clear()
  }
  clear(): void {
    this.depName = ''
  }
}
