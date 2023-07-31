import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit, OnChanges {
  @Input() appointment?: Appointment;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentAppointment: Appointment = {};
  message = '';

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentAppointment = { ...this.appointment };
  }

  updateAppointment(): void {
    const data = {
      email: this.currentAppointment.email,
      phoneNumber: this.currentAppointment.phoneNumber,
      date: this.currentAppointment.date
    };

    if (this.currentAppointment.id) {
      this.appointmentService.update(this.currentAppointment.id, data)
        .then(() => this.message = 'The appointment was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteAppointment(): void {
    if (this.currentAppointment.id) {
      this.appointmentService.delete(this.currentAppointment.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The appointment was deleted successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}

