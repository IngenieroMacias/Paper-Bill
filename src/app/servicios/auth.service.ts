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

  public registro=(email,password)=>{
   this.afAuth.auth.createUserWithEmailAndPassword(email,password)
   .then((res)=>{
    console.log(res);
    alert('Usuario registrado');
        
   }).catch((error)=>{
    console.log(error);
    alert('Error');
   }) 
  }


  public loginEmail=(email,password)=>{
   this.afAuth.auth.signInWithEmailAndPassword(email,password)
   .then((resp)=>{
    console.log(resp);
    alert('Usuario registrado');
        
   }).catch((error)=>{
    console.log(error);
    alert('Error');
   }) 
  }
    
  public getAuth(){
      return this.afAuth.authState.map (auth => auth);
    }

  public logout(){
    return this.afAuth.auth.signOut();
  }

  public isLogged(){
   return this.afAuth.authState;
  }

}
