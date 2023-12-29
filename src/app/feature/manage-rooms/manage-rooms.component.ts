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
    {
      serialNumber: 3,
      seater: 'diya',
      roomNumber: '103',
      feePerMonth: 704,
      postingDate: '2023-03-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 4,
      seater: 'triple',
      roomNumber: '104',
      feePerMonth: 701,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 5,
      seater: 'Double',
      roomNumber: '105',
      feePerMonth: 702,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 6,
      seater: 'Double',
      roomNumber: '106',
      feePerMonth: 704,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 7,
      seater: 'Double',
      roomNumber: '107',
      feePerMonth: 706,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 8,
      seater: 'Double',
      roomNumber: '108',
      feePerMonth: 707,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 9,
      seater: 'Double',
      roomNumber: '109',
      feePerMonth: 708,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 10,
      seater: 'Double',
      roomNumber: '106',
      feePerMonth: 709,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 11,
      seater: 'Double',
      roomNumber: '109',
      feePerMonth: 706,
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