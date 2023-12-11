import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  submenuStates: boolean[] = [false, false, false, false, false];

  toggleSubMenu(index: number) {
    this.submenuStates[index] = !this.submenuStates[index];
  }
}
