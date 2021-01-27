import { Component, OnInit } from '@angular/core';

interface Client {
  first_name: string
  last_name: string
  address: string
  age: number
}
@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {
  name: string = ''
  password: string = ''
  client: Client = {
    first_name: 'Juliana',
    last_name: 'Cardoso',
    address: 'Rua Bem te VI',
    age: 18
  }


  constructor() { }

  ngOnInit(): void {
  }

}
