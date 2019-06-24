import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email:string;
  public password:string;
  constructor( public authServ:AuthService,public routerLogin:Router) {
  
   }

   onSubmitLogin(){
     this.authServ.loginEmail(this.email,this.password)
     .then(resp=>{
       this.routerLogin.navigate(['/private']);
     }).catch(error=>{
       console.log(error);
       this.routerLogin.navigate(['/login']);
     });;
   }



  ngOnInit() {
  }

}
