import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointment: any = {
    name: '',
    phone: '',
    date: '',
    time: '',
    package: '',
    barber: 'Mohamed'  // Default to the first barber
  };

  constructor(private notificationService: NotificationService) {}

  onSubmit() {
    console.log('Appointment booked:', this.appointment);
    // Send notification to admin
    this.notificationService.sendNotification('New appointment booked: ' + JSON.stringify(this.appointment));
    // Book the appointment
    this.notificationService.bookAppointment(this.appointment);
    
    // Reset the appointment object to clear the form
    this.appointment = {
      name: '',
      phone: '',
      date: '',
      time: '',
      package: '',
      barber: 'Mohamed'  // Reset to the default barber
    };
  }
}
