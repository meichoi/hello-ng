import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  imgSrc = ['../../assets/image1.jpg','../../assets/image2.jpg'];
  altName = ['FIRST 1','SECOND 2'];
  constructor() { }

  ngOnInit() {
  }

}
