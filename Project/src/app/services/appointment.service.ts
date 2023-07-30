import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointmentsCollection: AngularFirestoreCollection<Appointment>;

  constructor(private firestore: AngularFirestore) {
    this.appointmentsCollection = this.firestore.collection<Appointment>('appointments');
  }

  getAll(): Observable<Appointment[]> {
    return this.appointmentsCollection.valueChanges();
  }

  get(id: string): Observable<Appointment | undefined> {
    return this.appointmentsCollection.doc<Appointment>(id).valueChanges();
  }

  create(appointment: Appointment): Promise<void> {
    return this.appointmentsCollection.add(appointment).then(ref => {
      console.log('Added document with ID: ', ref.id);
    });
  }

  update(id: string, data: any): Promise<void> {
    return this.appointmentsCollection.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.appointmentsCollection.doc(id).delete();
  }
}
