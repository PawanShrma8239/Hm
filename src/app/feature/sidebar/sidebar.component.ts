import {  Component  } from '@angular/core';
import { ComService } from '../com.service';


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
  constructor(private comService: ComService) {}
  change(value: boolean): void {
    this.comService.updateShide(value);
   
   
  }


}
