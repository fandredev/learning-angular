import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  subscription1!: Subscription;
  subscription2!: Subscription;

  n1 = 0
  n2 = 0

  s1 = ''
  s2 = ''

  ngOnInit(): void {
    this.s1 = 'Completed'
    this.s2 = 'Observabled'
    new Observable((observer: Observer<number>) => {
      observer.next(1)
      observer.next(2)
      observer.next(3)
      observer.next(4)
      observer.next(5)
      observer.error('Error')
      observer.complete()
    }
    ).subscribe(
      (n: number) => console.log(n),
      err => console.error(err),
      () => console.log('Completed')
    )

    /*
    const timerCount = interval(400)
    timerCount.subscribe(
      n => console.log(n)
    )
    console.log('after interval');
    */

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
    this.subscription1 = myIntervalObserable.subscribe(n => { this.n1 = n },
      err => this.s1 = `Error: ${err}`),
      () => this.s1 = 'Completed'

    this.subscription2 = myIntervalObserable.subscribe(n => { this.n2 = n },
      err => this.s2 = `Error: ${err}`),
      () => this.s2 = 'Completed'


    setTimeout(() => {
      this.subscription1.unsubscribe()
      this.subscription2.unsubscribe()
    }, 11000)
  }
}
