import { Component, OnInit } from '@angular/core';

interface Room {
  serialNumber: number;
  seater: string;
  roomNumber: string;
  feePerMonth: number;
  postingDate: string;
}
@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent {
roomData:Room[]=[
  {
    serialNumber: 1,
    seater: 'Single',
    roomNumber: '101',
    feePerMonth: 500,
    postingDate: '2023-01-01'
  },
  {
    serialNumber: 2,
    seater: 'Double',
    roomNumber: '201',
    feePerMonth: 800,
    postingDate: '2023-02-01'
  },
  {
    serialNumber: 3,
    seater: 'triple',
    roomNumber: '202',
    feePerMonth: 801,
    postingDate: '2023-02-01'
  },
  // Add more rooms as needed
]

}
