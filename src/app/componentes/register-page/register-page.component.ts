import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public email:string;
  public password:string;
  constructor(public authService:AuthService, public routerRegister:Router, public flashMessages: FlashMessagesService) {
    
   }

   onSubmitAddUser(){
    this.authService.registerUser(this.email,this.password)
    .then(resp=>{
      this.flashMessages.show('Bienvenido a Allegra', {cssClass:'alert-success',timeout:800});
      this.routerRegister.navigate(['/private']);
    }).catch(err=>{
      this.flashMessages.show('*Datos Erroneos', {cssClass:'alert-danger',timeout:800});
      this.routerRegister.navigate(['/register']);
    });
  }



  ngOnInit() {
  }

}
