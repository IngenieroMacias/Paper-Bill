import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivatePageComponent } from './componentes/private-page/private-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './servicios/auth.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

import {environment} from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivatePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule.forRoot()

  ],
  providers: [AuthService,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
