import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  today: Date;
  money: number;
  shortenT: string;
  constructor() { }

  ngOnInit() {
    this.today = new Date();
    this.money = 125200000;
    this.shortenT ='sdfsdfsdf sdfs dfsfsdfs fsdf';
  }

}
