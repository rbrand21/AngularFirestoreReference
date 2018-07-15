import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-get-collection',
  templateUrl: './get-collection.component.html',
  styleUrls: ['./get-collection.component.css']
})
export class GetCollectionComponent implements OnInit {

  private collection: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.collection = db.collection('GetCollection').valueChanges()
  }

  ngOnInit() { }

}
