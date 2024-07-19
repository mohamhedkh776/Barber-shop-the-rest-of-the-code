import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new Subject<string>();
  notifications$ = this.notificationSubject.asObservable();

  private appointments: any[] = [];

  sendNotification(message: string) {
    this.notificationSubject.next(message);
  }

  bookAppointment(appointment: any) {
    this.appointments.push(appointment);
  }

  getAppointments() {
    return this.appointments;
  }
}
