import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
data: any
studentList=[]

  constructor(private firebaseService: FirebaseService) { }


  ngOnInit() {
    this.firebaseService.read_students().subscribe(data => {

      this.studentList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          TargetAmount: e.payload.doc.data()['TargetAmount'],
          SavedAmount: e.payload.doc.data()['SavedAmount'],
          DesiredDate: e.payload.doc.data()['DesiredDate'],
          circularValue: e.payload.doc.data()['SavedAmount']/ e.payload.doc.data()['TargetAmount'] * 100
        };
      })
      console.log(this.studentList);

    });
  }
}
