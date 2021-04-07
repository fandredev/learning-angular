/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { publish } from 'rxjs/operators';

@Component({
  selector: 'app-hot-observables',
  templateUrl: './hot-observables.component.html',
  styleUrls: ['./hot-observables.component.scss']
})
export class HotObservablesComponent implements OnInit {
  n1 = 0
  n2 = 0
  n = 0
  s1 = ''
  s2 = ''
  myObservable: Observable<number>
  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable((observer: Observer<number>) => {
      let i = 0
      console.log('%c Observable Created', 'color: #ff0000')
      setInterval(() => {
        i++
        console.log(`%c i = ${i}`, 'color: #0000ff')
        i === 100 ? observer.complete() : observer.next(i)

      }, 1000)
    })
    this.usingSubjects()
    this.usingPublish()
  }
  usingSubjects(): void {
    const subject = new Subject<number>()
    this.myObservable.subscribe(subject)

    this.s1 = 'Waiting for interval...'

    // Subscriber 1
    setTimeout(() => {
      subject.subscribe(n => {
        this.n1 = n
        this.s1 = 'ok'
      })
    }, 2000)

    // Subscriber 2
    this.s2 = 'Waiting for interval...'
    setTimeout(() => {
      subject.subscribe(n => {
        this.n2 = n
        this.s2 = 'ok'
      })
    }, 4000)
  }
  // pipe aplica tipo de operadores do rxjs para os dados do observable


  usingPublish(): void {
    // const multicasted = this.myObservable.pipe(publish(), refCount())
    const multicasted = this.myObservable.pipe(publish(),;)
    // Subscriber 1
    setTimeout(() => {
      multicasted.subscribe(n => {
        this.n1 = n
        this.s1 = 'ok'
      })
      setTimeout(() => { })
    }, 2000)

    // Subscriber 2
    this.s2 = 'Waiting for interval...'
    setTimeout(() => {
      multicasted.subscribe(n => {
        this.n2 = n
        this.s2 = 'ok'
      })
    }, 4000)
  }
}
