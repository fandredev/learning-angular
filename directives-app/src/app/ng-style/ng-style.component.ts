import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent {
  myFontSize: string = '10px'
  myColor: string = 'green'
  constructor() { }

}
