import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, // ⬅️ ESSENCIAL para ngModel
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  goBack() {
    this.router.navigate(['/access']);
  }

  login() {
    const success = this.authService.login(this.username, this.password);

    if (success) {
      this.router.navigate(['/home']);
    }
  }
}
