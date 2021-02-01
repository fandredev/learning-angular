import { EventEmitter, Injectable } from '@angular/core';
import { DepartmentService } from './department.service';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private next_id = 0
  private products: Product[] = []
  private dateFromServer: any[] = [{
    id: 1,
    name: 'Laptop',
    departament_id: 4,
    price: 40,
    description: 'Laptop Description'
  }, {
    id: 2,
    name: 'Shirt',
    departament_id: 2,
    price: 19,
    description: 'Shirt Description'
  },
  {
    id: 3,
    name: 'Polo',
    departament_id: 3,
    price: 50,
    description: 'Polo Description'
  },
  {
    id: 4,
    name: 'Mouse',
    departament_id: 4,
    price: 40,
    description: 'Mouse Description'
  }]
  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>()

  constructor(private departamentService: DepartmentService) {
    for (const p of this.dateFromServer) {
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departamentService.getDepartamentById(p.id && p.id)
      })
      this.next_id = p.id + 1
    }
  }

  getProducts(): Product[] {
    return this.products
  }

  addProduct(p: Product): void {
    const data: Product = Object.freeze({ id: this.next_id++, ...p })
    this.products.push(data)

    console.log(this.products);
    this.onNewProduct.emit(data)
  }
}
