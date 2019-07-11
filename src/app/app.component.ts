import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userId = '3';
  constructor(private router: Router) {} //라이브러리 사용을 위해 제일 작성하면 임포트도 자동으로 됨
  /*constructor(db: AngularFirestore) {

  }*/
  goTwo() {
    this.router.navigate(['/two']);
  }
}
