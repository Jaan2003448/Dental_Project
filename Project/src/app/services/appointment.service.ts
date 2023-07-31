import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private dbPath = "/appointments";
  private appointmentsref: AngularFirestoreCollection<Appointment>;

  constructor(private db: AngularFirestore) {
    this.appointmentsref = this.db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Appointment>{
    return this.appointmentsref;
  }

  create(appointment: any){
    return this.appointmentsref.add({ ...appointment });
  }

  update(id: string, data: any): Promise<void> {
    return this.appointmentsref.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.appointmentsref.doc(id).delete();
  }
}
