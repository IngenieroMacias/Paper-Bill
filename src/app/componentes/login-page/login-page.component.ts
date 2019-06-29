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
  public email:string;
  public password:string;
  constructor( public authServ:AuthService,public routerLogin:Router,public flashMessage: FlashMessagesService) {
  
   }

   onSubmitLogin(){
     this.authServ.loginEmail(this.email,this.password)
     .then(resp=>{
       this.flashMessage.show('Ingreso Correcto',{cssClass:'alert-success',timeout:800});
       this.routerLogin.navigate(['/private']);
     }).catch(error=>{
       this.flashMessage.show('Verificar Datos',{cssClass:'alert-danger',timeout:800});
       this.routerLogin.navigate(['/login']);
     });
   }



  ngOnInit() {
  }

}
