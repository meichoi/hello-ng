import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { DetailsComponent } from './five/details.component';
import { LimitPipe } from '../pipes/limit.pipe';
import { ShortenPipe } from '../pipes/shorten.pipe';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    DetailsComponent,
    LimitPipe,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    //라우트모듈 등록
    AppRoutingModule,
    //폼모듈 등록
    FormsModule,
    //파이어베이스 모듈 들록
    AngularFireModule.initializeApp(environment.firebase, 'ng-201906'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-us'},
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
