import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';

import { HomeComponent } from './components/home/home.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },

{ path: 'appointments', component: AppointmentsListComponent },

{ path: 'add', component: AddAppointmentComponent },

{path: 'home', component: HomeComponent},

{path: 'sign-in', component: SignInComponent},

{path: 'sign-up', component: SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
