import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OneComponent} from './one/one.component';
import {ThreeComponent} from './three/three.component';
import {TwoComponent} from './two/two.component';
import {FourComponent} from './four/four.component';
import {FiveComponent} from './five/five.component';
import {DetailsComponent} from './five/details.component';

const routes: Routes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  {path: 'one', component: OneComponent},
  {path: 'four/:id', component: FourComponent},
  {
    path: 'five',
    component: FiveComponent,
    children: [
      {path: ':id', component: DetailsComponent}
    ]
  },
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent}
];
//라우팅 테이블

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
