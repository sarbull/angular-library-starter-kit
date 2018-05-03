import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RestGridModule } from '../../src';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RestGridModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
