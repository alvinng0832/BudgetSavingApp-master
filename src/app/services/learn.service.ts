import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { LearnInfo } from '../../models/learn';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { isEmpty } from 'rxjs/operators';

@Injectable()
export class LearnService {

  //Name of database in firestore

  //Learn is being initialize
  learn: Observable<LearnInfo[]>

  constructor(
    private firestore: AngularFirestore,
  ) {}



  // To retrieve the learn data from Learn collection
  getLearn() {
    // return this.learn = this.firestore.collection('learn').valueChanges();
    return this.firestore.collection('learn').snapshotChanges();
  }

  saveLearn(id, saved) {
    this.firestore.collection('users').doc(id)
    .set({saved: saved})
  }

  getSaved(id) {
    return this.firestore.collection('users').doc(id)
      .valueChanges()
  }

}

