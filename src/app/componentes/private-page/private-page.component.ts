import {Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent implements OnInit {
  public isLogin = false;

  constructor(public AuthServ: AuthService, public routerLogout: Router) { 
    this.AuthServ.isLogged()
    .subscribe((result)=>{
      if(result && result.uid){
        this.isLogin=true;
      }else{
        this.isLogin=false;
      }
   },(error)=>{
     console.log(error);
       this.isLogin=false;  
    })
  }
     
   ngOnInit() {
   }

   onclickLogout(){
       this.AuthServ.logout();
   }

  
}
