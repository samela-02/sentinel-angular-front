import { Injectable } from '@angular/core';

export interface User {
  name: string;
  role: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private mockUser: User | null = {
    name: 'Alex Silva',
    role: 'Administrador',
    email: 'alex@email.com',
  };

  getUser(): User | null {
    return this.mockUser;
  }

  isAuthenticated(): boolean {
    return !!this.mockUser;
  }

  login(username: string, password: string): boolean {
    // MOCK: sempre loga
    this.mockUser = {
      name: 'Alex Silva',
      role: 'Administrador',
      email: 'alex@email.com',
    };
    return true;
  }

  logout(): void {
    this.mockUser = null;
  }
}
