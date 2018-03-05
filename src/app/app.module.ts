import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import {FormsModule, NgModel} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HobbyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
