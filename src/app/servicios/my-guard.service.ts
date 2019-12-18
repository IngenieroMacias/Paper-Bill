import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyGuardService implements CanActivate {

  public isLogin = false;

  constructor(public AuthServ: AuthService, public router: Router) {
    this.AuthServ.isLogged()
    .subscribe((result)=>{
      if(result && result.uid){
        this.isLogin=true;
        this.router.navigate(['/private']);
      }else{
        this.isLogin=false;
        this.router.navigate(['/home']);
      }
   },(error)=>{
     console.log(error);
     this.router.navigate(['/home']);
    })
  }

  canActivate(){
    return this.isLogin;
  }
}
