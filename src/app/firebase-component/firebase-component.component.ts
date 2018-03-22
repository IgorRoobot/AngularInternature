import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Item { id: number; name: string; }
@Component({
  selector: 'app-firebase-component',
  templateUrl: './firebase-component.component.html',
  styleUrls: ['./firebase-component.component.css']
})
export class FirebaseComponentComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  count=0;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('items', ref => ref.orderBy('id'));
    this.items = this.itemsCollection.valueChanges();
    
  }

  addItem(name: string) {
    // Persist a document id
    const item: Item = { id: this.count , name: name };
    this.itemsCollection.add(item);
  }
  ngOnInit() {
    this.items.subscribe(
      a => this.count = a.length + 0  );
  }

}
