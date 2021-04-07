import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-observables',
  templateUrl: './cold-observables.component.html',
  styleUrls: ['./cold-observables.component.scss']
})
export class ColdObservablesComponent implements OnInit {

  subscription1!: Subscription;
  subscription2!: Subscription;

  n1 = 0
  n2 = 0

  s1 = ''
  s2 = ''

  ngOnInit(): void {
    this.s1 = 'Completed'
    this.s2 = 'Observabled'
    const myIntervalObserable = new Observable((observer: Observer<any>) => {
      let n = 0
      const id = setInterval(() => {
        n++
        console.log(n, 'from observable');
        if (n === 10)
          observer.complete()
        else if (n % 2 === 0)
          observer.next(n)

      }, 1000)
      return () => clearInterval(id)
    })
    this.s1 = 'wait for interval'
    this.subscription1 = myIntervalObserable.subscribe(n => { this.n1 = n },
      err => this.s1 = `Error: ${err}`),
      () => this.s1 = 'Completed'

    setInterval(() => {
      this.subscription2 = myIntervalObserable.subscribe(n => { this.n2 = n },
        err => this.s2 = `Error: ${err}`),
        () => this.s2 = 'Completed'
    }, 3000)


    setTimeout(() => {
      this.subscription1.unsubscribe()
      this.subscription2.unsubscribe()
    }, 11000)
  }

}
