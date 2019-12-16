import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
 register:any={};
  constructor(private authService:AuthService, private routerRegister:Router) {
    
   }

  registrar(){
    this.authService.registro(this.register.email,this.register.password);
  }



  ngOnInit() {
  }

}
