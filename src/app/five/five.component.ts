import { Component, OnInit } from '@angular/core';

interface fiveChild {
  id: number;
}

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})

export class FiveComponent implements OnInit {
  constructor() { }
  child: fiveChild[];
  ngOnInit() {
    this.child = [
      {id: 1},
      {id: 2},
      {id: 3}
    ]
  }

}
