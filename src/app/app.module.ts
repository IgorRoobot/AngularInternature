import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckerComponent } from './checker/checker.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
