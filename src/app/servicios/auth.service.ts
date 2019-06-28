import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2'
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import {FlashMessagesService} from 'angular2-flash-messages';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth:AngularFireAuth,public flashMessages:FlashMessagesService) { 


  }

  registerUser(email:string,pass:string){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then(userData=>resolve(userData),
         err=>reject(err))
      })
     
   
  }




  loginEmail(email:string,pass:string){
   return new Promise((resolve,reject)=>{
     this.afAuth.auth.signInWithEmailAndPassword(email,pass)
     .then(userData=>resolve(userData),
         err=>reject(err))
   });
  }
    
  getAuth(){
      return this.afAuth.authState.map (auth => auth);
    }

  logout(){
    return this.afAuth.auth.signOut();
  }


}
