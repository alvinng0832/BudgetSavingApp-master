import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
data: any
studentList=[]

  constructor(private firebaseService: FirebaseService) { }

}
