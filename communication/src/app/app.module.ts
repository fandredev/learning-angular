import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ChildrenComponent } from './event/children/children.component';
import { EventComponent } from './event/event.component';
import { ClientComponent } from './input-binding/client/client.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { FatherComponent } from './Tests/father/father.component';
import { SonComponent } from './Tests/son/son.component';



@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildrenComponent,
    FatherComponent,
    SonComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
