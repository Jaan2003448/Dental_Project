import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userSignedin = false;

  constructor(public afauth: AngularFireAuth){}

  signIn(){
    this.userSignedin = true;
  }

  signOut(){
    this.userSignedin = false;
  }

  title = 'Project';

}
