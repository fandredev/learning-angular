import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBind {

  constructor() { }

  log(item: string): void {
    console.log(item)
  }

}
