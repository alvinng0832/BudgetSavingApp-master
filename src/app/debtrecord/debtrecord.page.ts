import { Component, OnInit } from '@angular/core';
import { IlentService } from '../services/ilent.service';
import { Router } from '@angular/router';
import { AlertController, PopoverController, NavController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IborrowService } from '../services/iborrow.service';
import { StorageService } from '../services/storage.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ClosedebtService } from '../services/closedebt.service';

@Component({
  selector: 'app-debtrecord',
  templateUrl: './debtrecord.page.html',
  styleUrls: ['./debtrecord.page.scss'],
})
export class DebtrecordPage implements OnInit {
 
  step = 0;


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
LentRecord = [];
BorrowRecord=[];
CloseDebts=[];
NewLentForm : FormGroup;
collectionName = "ilented"
collectionName1 = "closedebts"
collectionName2 = "iborrow"
  user: any;
  uid: any;
  constructor( private ClosedebtService: ClosedebtService, private afAuth: AngularFireAuth,private toastController: ToastController, private navCtrl: NavController, private iborrowService: IborrowService, private fb : FormBuilder, private firestore: AngularFirestore, public alertController: AlertController, private router: Router, private ilentService: IlentService) {
    this.user =JSON.parse(localStorage.getItem('user'))
      this.afAuth.auth.onAuthStateChanged((user) => {
       
        this.uid = user.uid
      })
      console.log(this.user.user.uid)
   }
  

  ngOnInit() {
    this.ilentService.getNotes().subscribe(data => {
      console.log(data)
      this.LentRecord = data.map(e => {
        const data = e.payload.doc.data();
        const id = e.payload.doc.id;
        const Name = e.payload.doc.data()['Name'];
        const Description = e.payload.doc.data()['Description'];
        const Amount = e.payload.doc.data()['Amount'];
        const Date = e.payload.doc.data()['Date'];
        const DueDate =  e.payload.doc.data()['DueDate'];
        
        const TotalAmount = e.payload.doc.data()['Amount'] + e.payload.doc.data()['NewAmount'];

        return {id ,Name,TotalAmount,Description,Amount,Date,DueDate, ...data}
        
      });

      console.log(this.LentRecord)
  })
  this.iborrowService.getNotes().subscribe(data => {
    console.log(data)
    this.BorrowRecord = data.map(e => {
      const data = e.payload.doc.data();
      const id = e.payload.doc.id;
      const Name = e.payload.doc.data()['Name'];
      const Description = e.payload.doc.data()['Description'];
      const Amount = e.payload.doc.data()['Amount'];
      const Date = e.payload.doc.data()['Date'];
      const DueDate =  e.payload.doc.data()['DueDate'];
      const NewAmount = e.payload.doc.data()['NewAmount'];
      const TotalAmount = e.payload.doc.data()['Amount'] + e.payload.doc.data()['NewAmount'];

      return {id ,Name,TotalAmount,Description,Amount,Date,DueDate,NewAmount, ...data}
      
    });

    console.log(this.BorrowRecord)
})

 this.ClosedebtService.getNotes().subscribe(data => {
  console.log(data)
  this.CloseDebts = data.map(e => {
    const data = e.payload.doc.data();
    const id = e.payload.doc.id;

    const Name = e.payload.doc.data()['Name'];
    const Description = e.payload.doc.data()['Description'];
    const Amount = e.payload.doc.data()['Amount'] ;
    const Date = e.payload.doc.data()['Date'];
    const DueDate =  e.payload.doc.data()['DueDate'];
    const NewAmount = e.payload.doc.data()['NewAmount'];
    const TotalAmount = e.payload.doc.data()['Amount'] + e.payload.doc.data()['NewAmount'];


    return {TotalAmount, Name, Description, Amount, Date, DueDate,NewAmount, ...data}
  });

  console.log(this.CloseDebts)
})

}
EditRecord(ilent){
  ilent.isEdit = true;
  ilent.Name = ilent.Name;
  ilent.Description = ilent.Description;
  ilent.NewAmount = ilent.NewAmount;
}
EditRecord1(iborrow){
  iborrow.isEdit = true;
  iborrow.Name = iborrow.Name;
  iborrow.Description = iborrow.Description;
  iborrow.NewAmount = iborrow.NewAmount;

}




UpdateRecord(debtsrow1) {
  let ilent = {};
  ilent['Name'] = debtsrow1.Name;
  ilent['Description'] = debtsrow1.Description;
  ilent['NewAmount'] = debtsrow1.NewAmount;
  this.ilentService.updateNote( debtsrow1.id, ilent);
  console.log('Debts are Successfully Added')
  debtsrow1.isEdit = false;
 
}

UpdateRecord1(debtsrow) {
  let iborrow = {};
  iborrow['Name'] = debtsrow.Name;
  iborrow['Description'] = debtsrow.Description;
  iborrow['NewAmount'] = debtsrow.NewAmount;
  this.iborrowService.updateNote( debtsrow.id, iborrow);
  console.log('Debts are Successfully Added')
  debtsrow.isEdit = false;
 
}

async presentAlert(ilent){
  const alert = await this.alertController.create({
    header: 'Are you sure you want to Create New Record?',
    message: '<div><ion-icon name="create-outline"></ion-icon> To increase the Debts manually</div>' ,
    buttons:[{
      text:'Cancel',
      role:'Cancel',
      handler: ()=>{
        console.log('Debts are Canceled')
      }
    },
    {
      text: 'Confirm',
      cssClass:'secondary',
      handler: ()=>{
        ilent.isEdit = true;
        ilent.Name = ilent.Name;
        ilent.Description = ilent.Description;
        ilent.NewAmount = ilent.NewAmount;
      }
    }
  
  
  ]
  })
  await alert.present()
}
removelent(ilent_id){
  this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).doc(ilent_id).delete()
}
removeborrow(iborrowid){
  this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName2).doc(iborrowid).delete();
}
removedebts(closedebts_id){
  console.log(closedebts_id)
  this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName1).doc(closedebts_id).delete();

}
forgive(closedebts,ilent_id ){
  console.log(closedebts)
  return this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName1).add(closedebts).then(resp=>{
    this.router.navigateByUrl('/debts')
    this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).doc(ilent_id).delete()
  }) 
}

loadItems(){
 
}


}
