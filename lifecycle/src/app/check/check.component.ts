import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
})
export class CheckComponent implements OnChanges, OnInit {

  @Input() test = 'whatever'

  name = ''
  age = 0

  constructor() { }

  ngOnChanges(): void {
    console.log('ngOnChanges chamado!');
  }

  ngOnInit(): void {
    console.log('ngOnInit chamado!');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck chamado!');

  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit chamado!');

  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked chamado!');

  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit chamado!');

  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked chamado!');

  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy chamado!');
  }

}
