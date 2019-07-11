import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFirestore) {

  }

  getAllComments(): Observable<any[]>{
    return this.db.collection('comments').valueChanges();
  }
  registPost(){
    this.db.collection( 'comments').add(
      {
        id:5,
        name:'motna',
        email:'eresdfsdfr@sdfsdf.com',
        body:'23434sdfsfssfjgsdfsd sdfsfk osdfsd... '
      }
    )
  }
}
