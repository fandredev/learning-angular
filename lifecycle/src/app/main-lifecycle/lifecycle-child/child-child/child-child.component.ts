import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.scss']
})
export class ChildChildComponent implements OnInit, OnChanges {

  @Input() name = ''

  constructor() { }

  ngOnInit(): void {
    console.log(' Child child (ngOnInit)', this.name);
  }
  ngOnChanges(): void {
    console.log(' Child child (ngOnChanges)', this.name);
  }
  ngAfterContentInit(): void {
    console.log(' Child child (ngAfterContentInit)', this.name);
  }

}
