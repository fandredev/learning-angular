import { Component, OnInit } from '@angular/core';

enum Colors { 
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'
}
const { primary, accent, warn } = Colors
@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
})
export class PropertyBindingComponent implements OnInit {
  color: string = accent
  disabled: boolean = false
  idx: number = 0
  public colors: Array<string> = [primary,accent,warn]

  constructor() { }

  ngOnInit(): void {
      setInterval(() => {
        (this.idx += 1) % this.colors.length
      }, 500)
  }

}
