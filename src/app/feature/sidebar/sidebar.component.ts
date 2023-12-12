import { Component  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeMenuItem: string = '';

  toggleSubMenu(menuItem: string): void {
    this.activeMenuItem = this.activeMenuItem === menuItem ? '' : menuItem;
  }
}
