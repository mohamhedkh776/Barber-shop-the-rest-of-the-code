import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  notifications: string[] = [];
  location: string = '123 Barber Street, Barbershop City, BS 12345';
  availableAppointments: any[] = [
    { date: '2023-07-03', time: '10:00 AM' },
    { date: '2023-07-03', time: '11:00 AM' },
    { date: '2023-07-03', time: '01:00 PM' },
    // Add more appointments as needed
  ];
  barbers: any[] = [
    {
      name: 'Mohamed',
      experience: '10 years',
      specialties: 'Haircuts, Beard Styling, Hair Coloring'
    },
    {
      name: 'Yosef',
      experience: '8 years',
      specialties: 'Haircuts, Beard Styling'
    }
  ];
  bookedAppointments: any[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notifications$.subscribe((message: string) => {
      this.notifications.push(message);
    });

    this.bookedAppointments = this.notificationService.getAppointments();
  }
}
