import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookComponent } from './book/book.component';
import { DvdComponent } from './dvd/dvd.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dvds'},
  { path: 'dvds', component: DvdComponent },
  { path: 'dvds/:index', component: DvdDetailComponent },
  { path: 'books', component: BookComponent },
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
