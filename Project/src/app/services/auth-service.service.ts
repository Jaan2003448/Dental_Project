import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private afAuth: AngularFireAuth) {
   }

  signIn(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
  }

  signUp(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }

  signOut(){
    return this.afAuth.signOut();
  }
}
