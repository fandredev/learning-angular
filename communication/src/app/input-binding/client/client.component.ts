import { Component, Input } from '@angular/core';
import { Client } from './../input.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent { // Componente filho
  @Input()
  client!: Client;

  constructor() { }

}
