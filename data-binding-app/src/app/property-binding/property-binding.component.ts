import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
})
export class PropertyBindingComponent implements OnInit {
  color: string = 'accent'
  disabled: boolean = false
  idx: number = 0
  public colors: Array<string> = ['primary','accent','warn']

  constructor() { }

  ngOnInit(): void {
      setInterval(() => {
        (this.idx += 1) % this.colors.length
      }, 500)
  }

}
