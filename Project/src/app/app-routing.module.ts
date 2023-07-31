import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';

import { HomeComponent } from './components/home/home.component';


const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },

{ path: 'appointments', component: AppointmentsListComponent },

{ path: 'add', component: AddAppointmentComponent },

{path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
