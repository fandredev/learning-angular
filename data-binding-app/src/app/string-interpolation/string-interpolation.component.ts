import { Component, OnInit } from '@angular/core';

interface Person {
  first_name: string
  last_name: string
  age: number,
  address: string
}

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html'
})

export class StringInterpolationComponent implements OnInit {
  firstname: string = 'John'

  public person: Person = {
    first_name: 'Felipe',
    last_name: 'André',
    age: 100,
    address: 'Route 1'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
