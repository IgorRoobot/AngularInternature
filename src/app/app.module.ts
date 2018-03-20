import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckerComponent } from './checker/checker.component';
import { FormsComponent } from './forms/forms.component';
import { AppRoutingModule } from './app-routing.module';
import { FormDelateComponent } from './form-delate/form-delate.component';
import { FormViewComponent } from './form-view/form-view.component';
import { GoogleServiceService } from './google-service.service';
import { BoxComponent } from './box/box.component';
import { MessageService } from './test.service';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckerComponent,
    FormsComponent,
    FormDelateComponent,
    FormViewComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GoogleServiceService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
