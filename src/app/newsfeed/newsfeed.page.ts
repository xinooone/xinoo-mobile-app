import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Time } from '@angular/common';
import { Observable } from 'rxjs';

export interface Event {
  address:string;
  address2: string;
  addressNumber: number;
  city: string;
  date: Time;
  eventTitle:string;
  organizerName:string;
  state: string;
  time:Time;
  zip:string;
}

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage implements OnInit {
  eventCollectionRef: AngularFirestoreCollection<Event>;
  event$ = new Observable<Event[]>();

  constructor(private firestore: AngularFirestore) { 
    this.eventCollectionRef = firestore.collection<Event>('events');
    this.event$ = this.eventCollectionRef.valueChanges();
  }

  ngOnInit() {
  }

}
