import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
})
export class CheckChildComponent implements OnInit, OnDestroy, OnChanges {

  constructor() {
    console.log('CheckChild: Constructor chamado!');
  }

  ngOnChanges(): void {
    console.log('CheckChild: ngOnChange chamado!');
  }

  ngOnInit(): void {
    console.log('CheckChild: ngOnInit chamado!');
  }

  ngDoCheck(): void {
    console.log('CheckChild: ngDoCheck chamado!');

  }
  ngAfterContentInit(): void {
    console.log('CheckChild: ngAfterContentInit chamado!');

  }
  ngAfterContentChecked(): void {
    console.log('CheckChild: ngAfterContentChecked chamado!');

  }
  ngAfterViewInit(): void {
    console.log('CheckChild: ngAfterViewInit chamado!');

  }
  ngAfterViewChecked(): void {
    console.log('CheckChild: ngAfterViewChecked chamado!');

  }
  ngOnDestroy(): void {
    console.log('CheckChild: ngOnDestroy chamado!');
  }
}
