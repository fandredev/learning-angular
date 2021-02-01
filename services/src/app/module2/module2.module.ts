import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component3Component } from './component3/component3.component';



@NgModule({
  declarations: [Component3Component],
  exports: [Component3Component],
  imports: [
    CommonModule
  ]
})
export class Module2Module { }
