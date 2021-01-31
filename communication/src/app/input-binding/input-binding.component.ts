import { Component, Input, OnInit } from '@angular/core';
import { Names } from '../utils';
import { Client } from './input.model';
import { ServiceBind } from './service.service';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss']
})
export class InputBindingComponent implements OnInit {

  @Input() name: string = Names[Names.Cristina]
  @Input('othername') last_name = ''
  @Input('aged') age = 20

  clients: Client[]

  constructor(private serviceBind: ServiceBind) {
    this.clients = [
      { id: 1, name: Names[Names.Kaique], age: 20 },
      { id: 2, name: Names[Names.John], age: 30 },
      { id: 3, name: Names[Names.Cristina], age: 40 },
      { id: 4, name: Names[Names.Maria], age: 50 }
    ];
  }


  ngOnInit(): void {
    this.serviceBind.log(this.name);
  }

}
