import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public AuthServ:AuthService) { }
 
  onClickLogout(){
    this.AuthServ.logout();
  }
  ngOnInit() {
  }

}
