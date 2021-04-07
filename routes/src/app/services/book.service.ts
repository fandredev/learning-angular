import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([])
  public books$ = this.bookSubject$.asObservable()

  constructor() {
    timer(2000).subscribe(_ => {
      this.bookSubject$.next([
        { title: 'Book 1', pages: 200, authors: ['john', 'nicole']},
        { title: 'Book 2', pages: 111, authors: ['mily', 'jennifer']},
        { title: 'Book 3', pages: 213, authors: ['julian', 'michael']},
        { title: 'Book 4', pages: 400, authors: ['ellie']},
        { title: 'Book 5', pages: 84, authors: ['abby']},
      ])
    })
  }

  add(book: Book){
    this.bookSubject$.getValue().push(book)
  }
  remove(i: number){
    let books = this.bookSubject$.getValue()
    if(i >= 0 && i < books.length) books.splice(i, 1)
  }
  get(i: number) : Observable<Book>{
    return this.books$.pipe(map(books => (i >= 0 && i < books.length) ? books[i] : null)
    , delay(1000))

  }


}
