import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-saved-cards',
  templateUrl: './saved-cards.page.html',
  styleUrls: ['./saved-cards.page.scss'],
})
export class SavedCardsPage implements OnInit {
  uid: any
  
  data = [];
  constructor(
    private afAuth: AngularFireAuth, 
    private firestore: AngularFirestore,
  ) {
    this.uid = this.afAuth.auth.currentUser.uid
   }

  ngOnInit() {
     this.firestore.collection('users').doc(this.uid)
    .collection("Card").valueChanges().subscribe(data => {
      this.data = data
      console.log(this.data)
    });

 
  }

}
