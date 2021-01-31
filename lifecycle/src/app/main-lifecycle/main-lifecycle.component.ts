import { Component } from '@angular/core';
import { Client } from './../client.model';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['main-lifecycle.component.scss']
})
export class MainLifecycleComponent {

  foods: string[] = ['Rice', 'Beans', 'Pizza']
  clients: Client[] = []
  name = ''
  age = 0
  food = ''
  onEdit = -1
  randomNumber = 0;

  constructor() {
    this.generateRandomNumber();
  }
  generateRandomNumber(): void {
    this.randomNumber = Math.round(Math.random() * 100);
  }
  save(): void {
    if (this.onEdit == -1) {
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      });
    }
    else {
      this.clients[this.onEdit].name = this.name;
      this.clients[this.onEdit].age = this.age;
      this.clients[this.onEdit].food = this.food;

      this.onEdit = -1;
    }
    this.clean();
  }

  clean(): void {
    this.age = 0;
    this.food = '';
    this.name = '';
  }

  remove(i: number): void {
    this.clients.splice(i, 1);
  }

  edit(i: number): void {
    this.age = this.clients[i].age;
    this.name = this.clients[i].name;
    this.food = this.clients[i].food;

    this.onEdit = i;
  }
}
