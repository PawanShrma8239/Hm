import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  template: `
    <div>
      <p>You are logged out. <a (click)="returnToLogin()">Return to Login</a></p>
    </div>
  `,
})
export class LogoutComponent {
  username: string = '';
  password: string  = '';

  constructor(private router: Router) {}
  returnToLogin() {


    this.router.navigate(['/login']);
    console.log('form reset completed')
  }
}