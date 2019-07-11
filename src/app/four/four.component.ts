import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  userId: number;
  //forTwoWay = 'hello world!';
  forTwoWay = 0;
  myStyle: string;
  constructor(private route:ActivatedRoute) { }//파라미터 전달받은 값을 받는 방법

  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(params => this.userId = +params.get('id'));
    const userId = +this.route.snapshot.paramMap.get('id');
    this.userId = userId;
  }
  btnClicked() {
    console.log(this.forTwoWay + '를 입력했네');
    this.myStyle = 'alert-red';
  }
}
