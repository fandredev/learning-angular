import { Injectable } from "@angular/core";

@Injectable()

export class Service1 {
  num: number
  constructor() {
    this.num = Math.round(Math.random() * 1000)
    console.log('Service1 - Constructor')
  }
}