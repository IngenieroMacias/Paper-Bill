import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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

}
