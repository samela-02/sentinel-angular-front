import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../../core/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  user: User | null = null;

  metrics = {
    servicesUp: 20,
    servicesDown: 10,
    alerts: 20,
  };

  alerts = [
    { type: 'error', title: 'Bolt', time: '2025-02-23 12:00' },
    { type: 'warning', title: 'New Order', time: '2025-02-23 11:40' },
    { type: 'info', title: 'Caronte', time: '2025-02-23 10:20' },
    { type: 'critical', title: 'RabbitMQ', time: '2025-02-23 09:10' },
  ];

  constructor(private authService: AuthService) {
    this.user = this.authService.getUser();
  }
}
