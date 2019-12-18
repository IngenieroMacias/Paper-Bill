import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public login:any={}
  constructor( public authServ:AuthService,public router:Router,public flashMessage: FlashMessagesService) {

   }

   Login(){
     this.authServ.loginEmail(this.login.email,this.login.password)
     .then((res)=>{
         this.router.navigate(['private']);
     }).catch((error)=>{
       console.log(error);
     })
   }

   facebookLogin(){
   this.authServ.facebookEmail()
   .then((res)=>{
    console.log(res);
    this.router.navigate(['/private']);
    alert(res);

  }).catch((error)=>{
    console.log(error);

    this.router.navigate(['/home']);
    alert(error);
 });
   }

   googleEmail(){
   this.authServ.googleEmail()
   .then((res)=>{
     console.log(res);
     this.router.navigate(['/private']);
     alert(res);

   }).catch((error)=>{
     console.log(error);

     this.router.navigate(['/home']);
     alert(error);
  });
  }

  ngOnInit() {
  }

}
