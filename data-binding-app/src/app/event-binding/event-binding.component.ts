import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';

enum Mode {
  determinate = 'determinate',
  indeterminate = 'indeterminate'
}

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
})
export class EventBindingComponent implements OnInit {
  buttonName: string = 'My Button'
  i: number = 0
  spinnerMode= Mode.determinate
  btnEnable: boolean = true
  selectDisabled: boolean = false
  selectedOption: number = 1
  inputName: string = 'Felipe'


  constructor() { }

  ngOnInit(): void {
  }

  reset() : void {
    this.i = 0
  }
  inc() : void {
    this.i++
    this.buttonName = `Was clicked ${this.i} times`
  }
  disabled() : void {
    this.btnEnable = false
    this.spinnerMode = Mode.indeterminate
    setTimeout(() => {
      this.btnEnable = true
      this.spinnerMode = Mode.determinate
    },3000)
  }

  // check
  cbChange($event: MatCheckboxChange): void {
   this.selectDisabled = $event.checked
  }
  selectionChange({ value }: MatSelectChange) {
    this.selectedOption = value
  }

  // input

  inputEvent($event: any) {
    console.log($event?.target.value)
  }
}
