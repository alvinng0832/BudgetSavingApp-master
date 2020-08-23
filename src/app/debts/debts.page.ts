import { Component,OnInit } from '@angular/core';
import {  IlentService } from '../services/ilent.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { IborrowService } from '../services/iborrow.service';
import { ClosedebtService } from '../services/closedebt.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-debts',
  templateUrl: './debts.page.html',
  styleUrls: ['./debts.page.scss'],
})
export class DebtsPage implements OnInit {
CloseDebts=[];
BorrowList=[];
LentList=[];
  selectTabs = 'recent';
  id: any;
  user: any;
  uid: any;
  collectionName = "ilented"
  collectionName2 = "iborrow"
  collectionName1 = "closedebts"
  
  constructor(private afAuth: AngularFireAuth, private ClosedebtService: ClosedebtService, private iborrowService: IborrowService, public alertController: AlertController, private firestore: AngularFirestore, private router: Router, private ilentService: IlentService) { 
    this.user =JSON.parse(localStorage.getItem('user'))
    this.afAuth.auth.onAuthStateChanged((user) => {
     
      this.uid = user.uid
    })
    console.log(this.user.user.uid)
  }


  ngOnInit(): void {

  this.ilentService.getNotes().subscribe(data => {
    console.log(data)
    this.LentList = data.map(e => {
      const data = e.payload.doc.data();
      const id = e.payload.doc.id;
      const Name = e.payload.doc.data()['Name'];
      const Description = e.payload.doc.data()['Description'];
      const Amount = e.payload.doc.data()['Amount'] ;
      const Date = e.payload.doc.data()['Date'];
      const DueDate =  e.payload.doc.data()['DueDate'];
      const NewAmount = e.payload.doc.data()['NewAmount'];
      const TotalAmount = e.payload.doc.data()['Amount'] + e.payload.doc.data()['NewAmount'];


      return {id,TotalAmount, Name, Description, Amount, Date, DueDate,NewAmount, ...data}
    });

    console.log(this.BorrowList)
})
this.iborrowService.getNotes().subscribe(data => {
  console.log(data)
  this.BorrowList = data.map(e => {
    const data = e.payload.doc.data();
    const id = e.payload.doc.id;
    const Name = e.payload.doc.data()['Name'];
    const Description = e.payload.doc.data()['Description'];
    const Amount = e.payload.doc.data()['Amount'] ;
    const Date = e.payload.doc.data()['Date'];
    const DueDate =  e.payload.doc.data()['DueDate'];
    const NewAmount = e.payload.doc.data()['NewAmount'];
    const TotalAmount = e.payload.doc.data()['Amount'] + e.payload.doc.data()['NewAmount'];


    return {id,TotalAmount, Name, Description, Amount, Date, DueDate,NewAmount, ...data}
  });

  console.log(this.BorrowList)
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


    return {id, TotalAmount, Name, Description, Amount, Date, DueDate,NewAmount, ...data}
  });

  console.log(this.CloseDebts)
})



  }

 
  

  
  IBorrow(){
    this.router.navigateByUrl('/add-borrow')
  }
  ILent(){
    this.router.navigateByUrl('/add-lent')
  }
  removelentitem(ilent_id){
    this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName).doc(ilent_id).delete()
  }

  removeborrowitem(iborrowid){
    this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName2).doc(iborrowid).delete()
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
  UpdateRecord(debtsrow) {
    let ilent = {};
    ilent['Name'] = debtsrow.Name;
    ilent['Description'] = debtsrow.Description;
    ilent['NewAmount'] = debtsrow.NewAmount;
    this.ilentService.updateNote( debtsrow.id, ilent);
    console.log('Debts are Successfully Added')
    debtsrow.isEdit = false;
   
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
async AlertPresent(ilent){
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
goToDebtsRecord(){
  this.router.navigateByUrl('/debtrecord')
}
goToDebtsRecord1(){
  this.router.navigateByUrl('/debtrecord')
}
RemoveClosedebt(closedebts){
  console.log(closedebts)
  this.firestore.collection("users").doc(this.user.user.uid).collection(this.collectionName1).doc(closedebts).delete()
}
}
