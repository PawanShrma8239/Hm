import { Component, OnInit } from '@angular/core';

interface RoomData {
  serialNumber: number;
  seater: string;
  roomNumber: string;
  feePerMonth: number;
  postingDate: string;
  isDropdownOpen: boolean;
}
@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent {
  roomData: RoomData[] = [
    {
      serialNumber: 1,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 2,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    // Add more room data as needed...
  ];

  toggleDropdown(room: RoomData) {
    // Toggle the clicked dropdown
    room.isDropdownOpen = !room.isDropdownOpen;

    // Close all other dropdowns
    this.roomData
      .filter(r => r !== room && r.isDropdownOpen)
      .forEach(r => r.isDropdownOpen = false);
  }

}
