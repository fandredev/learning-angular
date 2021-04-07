import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dvd } from './../models/dvd';
import { DvdService } from './../services/dvd.service';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.scss']
})
export class DvdComponent implements OnInit {
  dvd$: Observable<Dvd[]>


  constructor(private dvdService: DvdService, private router: Router) { }

  ngOnInit(): void {
    this.dvd$ = this.dvdService.dvds$
  }
  goDetails(i: number, dvd: Dvd) {
    this.router.navigate([`/dvds/${i}`, { title: dvd.title }])
  }
}
