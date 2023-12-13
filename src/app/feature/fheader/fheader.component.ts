import { Component } from '@angular/core';

@Component({
  selector: 'app-fheader',
  templateUrl: './fheader.component.html',
  styleUrls: ['./fheader.component.css']
})
export class FheaderComponent {
  isPDropdownOpen = false;
  isMDropdownOpen = false;
  isNDropdownOpen = false;
  isLDropdownOpen = false;

  togglePDropdown() {
    this.closeAllMenusExcept('admin');
    this.isPDropdownOpen = !this.isPDropdownOpen;
  }
  toggleMDropdown() {
    this.closeAllMenusExcept('message');
    this.isMDropdownOpen = !this.isMDropdownOpen;
  }
  toggleNDropdown() {
    this.closeAllMenusExcept('notification');
    this.isNDropdownOpen = !this.isNDropdownOpen;
  }
  toggleLDropdown() {
    this.closeAllMenusExcept('language');
    this.isLDropdownOpen = !this.isLDropdownOpen;
  }
  private closeAllMenusExcept(menuToKeepOpen: string) {
    if (menuToKeepOpen !== 'admin') {
      this.isPDropdownOpen = false;
    }
    if (menuToKeepOpen !== 'message') {
      this.isMDropdownOpen = false;
    }
    if (menuToKeepOpen !== 'notification') {
      this.isNDropdownOpen = false;
    }
    if (menuToKeepOpen !== 'language') {
      this.isLDropdownOpen = false;
    }
  }
}
