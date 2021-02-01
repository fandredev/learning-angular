import { Component, OnInit } from '@angular/core';
import { Department } from '../models';
import { DepartmentService } from './../department.service';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  name = ''
  department!: Department | null;
  description = ''
  price = 0
  departments!: Department[]

  constructor(
    private productService: ProductService,
    private departamentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.departments = this.departamentService.getDepartaments()
  }
  save(): void {
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department!
    })
    this.clear()
  }
  clear(): void {
    this.name = ''
    this.price = 0
    this.description = ''
    this.department = null
  }

}
