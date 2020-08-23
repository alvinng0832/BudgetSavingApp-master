import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-reachedgoaldetails',
  templateUrl: './reachedgoaldetails.page.html',
  styleUrls: ['./reachedgoaldetails.page.scss'],
})
export class ReachedgoaldetailsPage implements OnInit {
ReachedList = [];
collectionName= "addGoals"
selectedDate: any;
today: any;
  user: any;
  uid: string;
  constructor(private afAuth: AngularFireAuth,private firestore: AngularFirestore, private router: Router, private firebaseService: FirebaseService) {
    this.user =JSON.parse(localStorage.getItem('user'))
    this.afAuth.auth.onAuthStateChanged((user) => {
     
      this.uid = user.uid
    })
  
  }

  ngOnInit() {
    this.firebaseService.Reached_students().subscribe(data => {
      console.log(data)
      this.ReachedList = data.map(e => {
        const data = e.payload.doc.data();
        const id = e.payload.doc.id;
        const Name = e.payload.doc.data()['Name'];
        const TargetAmount = e.payload.doc.data()['TargetAmount'];
        const SavedAmount = e.payload.doc.data()['SavedAmount'];
        const DesiredDate = e.payload.doc.data()['DesiredDate'];
        const circularValue =  e.payload.doc.data()['SavedAmount']/ e.payload.doc.data()['TargetAmount'] * 100;


        return {id, Name, TargetAmount, SavedAmount, DesiredDate, circularValue, ...data}
          
      });
      
      console.log(this.ReachedList)
  })

}
formatSubtitle = (percent: number) : string => {
  if(percent >= 100){
    return "Congratulations!"
  }else if(percent >= 50){
    return "Half"
  }else if(percent > 0){
    return "Just began"
  }else {
    return "Not started"
  }
}

back(){
  this.router.navigateByUrl('/goals')
}



calcAge() {
  let today: any = new Date();
  let selectedDate: any = new Date(this.selectedDate);

  let age = Math.round((Math.abs(selectedDate - today) / (24 * 60 * 60 * 1000)) / 365);
}

removeitem(reachgoal_id){
  console.log(reachgoal_id)
 return this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).doc(reachgoal_id).delete();

}
}
