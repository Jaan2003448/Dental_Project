import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserSignedIn = false;

  constructor(private afAuth: AngularFireAuth, private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      this.isUserSignedIn = !!user;
    });
  }

  signOut() {
    this.authService.signOut().then(() => {
      this.isUserSignedIn = false;
    });
  }
}
