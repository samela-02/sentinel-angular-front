import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { AuthService, User } from '../../core/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
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
    { type: 'info', title: 'Bolt', time: '22 DEC 7:20 PM' },
    { type: 'error', title: 'Erro 0 Bolt KOOP', time: '21 DEC 11:21 PM' },
    { type: 'info', title: 'Caronte', time: '21 DEC 9:28 PM' },
    { type: 'warning', title: 'RabbitMQ', time: '20 DEC 3:52 PM' },
    { type: 'critical', title: 'Eventos Slice - Pendentes', time: '19 DEC 11:35 PM' },
  ];

  constructor(private authService: AuthService) {
    this.user = this.authService.getUser();
  }
}
