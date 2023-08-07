import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(public afAuth: AuthServiceService, public router: Router){}

  signUp(email:string, password: string){
    this.afAuth.signUp(email,password).then(res=>{console.log("Successfully signed-up"), res})
    .catch(err=>{console.log("Something went wrong"), err});

    this.router.navigate(['home']);
  }

}
