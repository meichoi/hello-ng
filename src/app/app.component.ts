import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {} //라이브러리 사용을 위해 제일 작성하면 임포트도 자동으로 됨
  goTwo() {
    this.router.navigate(['/two']);
  }
}
