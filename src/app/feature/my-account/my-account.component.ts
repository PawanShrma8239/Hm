import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-account',
  template: `
    <div>
      <h2>My Account Page</h2>
      <!-- Your My Account content goes here -->
    </div>
  `,
})
export class MyAccountComponent {
  constructor(private router: Router) {}
  OrderNow() {
    // Navigate to the main page when clicking "My Account"
    this.router.navigate(['/my-account']);
  }
}