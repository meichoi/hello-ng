import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Host} from '../../model/host';
import {Observable} from 'rxjs';
import {tap, map} from 'rxjs/operators';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  comments: Observable<any>;
  constructor(private dataService : DataService) { }

  ngOnInit() {
// this.dataService.getAllComments()
//   .subscribe(res => {
//     this.comments = res;
//   });
  //  this.comments = this.dataService.getAllComments();
   this.comments =  this.dataService.getAllComments()
      .pipe(
        tap((item) => {console.log(item)})
        /*,
        map((item) => item.email.toUpperCase())*/
      );
  }
  addItem() {
    this.dataService.registPost();
    console.log('success!');
  }
}
