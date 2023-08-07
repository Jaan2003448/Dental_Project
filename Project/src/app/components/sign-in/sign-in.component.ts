import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {


  constructor(public afAuth: AuthServiceService, public router: Router){
  }

  signIn(email: string, password: string){
    this.afAuth.signIn(email,password).then(res=>{console.log("Successful sign-in"), res})
    .catch(err=>{console.log("Something went wrong"), err});

    this.router.navigate(['home']);
    
  }

}
