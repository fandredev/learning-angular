import { Component, Input, Output } from '@angular/core';
import { Client } from './../input.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})
export class ClientComponent { // Componente filho
  @Input()
  client!: Client;

  @Output()
  name = ''

  constructor() { }

}
