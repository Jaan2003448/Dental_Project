import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { map } from 'rxjs/operators';
import { Appointment } from 'src/app/models/appointment.model';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {
  appointments?: Appointment[];
  currentAppointment?: Appointment;
  currentIndex = -1;
  name = '';

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.retrieveAppointments();
  }

  refreshList(): void {
    this.currentAppointment = undefined;
    this.currentIndex = -1;
    this.retrieveAppointments();
  }

  retrieveAppointments(): void {

    this.appointmentService.getAll().snapshotChanges().pipe(

      map(changes =>

        changes.map(c =>

          ({ id: c.payload.doc.id, ...c.payload.doc.data() })

        )

      )

    ).subscribe(data => {

      this.appointments = data;

    });

  }

  setActiveAppointment(appointment: Appointment, index: number): void {
    this.currentAppointment = appointment;
    this.currentIndex = index;
  }
}

