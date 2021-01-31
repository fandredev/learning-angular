import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent {
  name = 'Felipe'



  public fn(): void {
    console.log('Fn');
  }
}
