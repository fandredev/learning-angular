import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Indicar onde o serviço vai ser fornecido
})
export class Service1 {
  num = 0


  constructor() {
    this.num = Math.round(Math.random() * 100)
  }
}
