import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isLogin = false;
  loggedUser: any = {};
  imgUser: any = {};
  constructor(public AuthServ: AuthService, public routerLogout: Router) {
    this.AuthServ.isLogged()
    .subscribe((result)=>{
      if(result && result.uid){
        this.isLogin=true;
        setTimeout(() => {
          this.loggedUser=this.AuthServ.getUser().currentUser.photoURL;
          this.imgUser=this.AuthServ.getUser().currentUser.email;
          console.log(this.loggedUser);
          console.log(this.imgUser);
        }, 500);

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

  onclickLogout() {
    this.AuthServ.logout();
  }



}
