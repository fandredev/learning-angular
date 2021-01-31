import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  value = 0
  title = 'My title'
  constructor() { }


  incBy(n: number): void {
    this.value += n;
  }
  decBy(n: number): void {
    this.value -= n;
  }
}
