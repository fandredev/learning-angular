import { Component, EventEmitter, Input, Output } from '@angular/core';


type ButtonProps = 'primary' | 'accent';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {
  @Input()
  title!: string

  @Output()
  plusOne = new EventEmitter

  @Output()
  plusTwo = new EventEmitter

  @Output()
  minusOne = new EventEmitter

  @Output()
  minusTwo = new EventEmitter

  color: ButtonProps = 'primary'


  constructor() { }

  plusOneClick(): void {
    this.plusOne.emit();
  }
  plusTwoClick(): void {
    this.plusTwo.emit();
  }
  minusOneClick(): void {
    this.minusOne.emit();
  }
  minusTwoClick(): void {
    this.minusTwo.emit();
  }

}
