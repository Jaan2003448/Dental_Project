import { Component } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {

  appointment: Appointment = new Appointment();
  submitted = false;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void { }

  saveAppointment(): void {
    this.appointmentService.create(this.appointment).then(() => {
      console.log('Created new appointment successfully!');
      this.submitted = true;
    });
  }

  newAppointment(): void {
    this.submitted = false;
    this.appointment = new Appointment();
  }

}
