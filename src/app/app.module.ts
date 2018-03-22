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
import { FirebaseComponentComponent } from './firebase-component/firebase-component.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckerComponent,
    FormsComponent,
    FormDelateComponent,
    FormViewComponent,
    BoxComponent,
    FirebaseComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
    ],
  providers: [GoogleServiceService, MessageService, AngularFireDatabase, AngularFireDatabaseModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
