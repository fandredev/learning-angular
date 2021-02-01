import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Product } from '../models';
import { ProductService } from './../product.service';
import { Columns } from './../types/index';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
})
export class ProductsTableComponent implements OnInit {

  @ViewChild(MatTable) dataTable: MatTable<any> | undefined

  products: Product[] = []
  prodColumns: Columns = ['id', 'prodname', 'department', 'price', 'description']


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
    this.productService.onNewProduct.subscribe(() => this.dataTable?.renderRows())
  }

}
