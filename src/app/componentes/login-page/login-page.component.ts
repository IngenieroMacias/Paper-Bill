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
  constructor( public authServ:AuthService,public routerLogin:Router,public flashMessage: FlashMessagesService) {
  
   }

   Login(){
     this.authServ.loginEmail(this.login.email,this.login.password);
   }



  ngOnInit() {
  }

}
