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
    AppRoutingModule //라우트 등록
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-us'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
