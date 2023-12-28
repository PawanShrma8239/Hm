import { Component } from '@angular/core';
interface RoomData {
  serialNumber: number;
  seater: string;
  roomNumber: string;
  feePerMonth: number;
  postingDate: string;
  isDropdownOpen: boolean;
  [key: string]: number | string | boolean;
}
@Component({
  selector: 'app-manage-rooms',
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent {
  entriesToShow: number = 10;
  currentPage: number = 1;
  displayedData: RoomData[] = [];
  pages: number[] =[];
  filteredRoomData: RoomData[]=[];

  filterValue : string = '';
  sortColumn: string = '';
  sortDirection: string = 'asc';

constructor(){
//initialize data

  this.filteredRoomData = [...this.roomData];
}


applyFilter() {
  console.log('filteredRoomData after filtering', this.filteredRoomData);
  this.filteredRoomData = this.roomData.filter(room =>
    room.seater.toLowerCase().includes(this.filterValue.toLowerCase()) ||
    room.roomNumber.toLowerCase().includes(this.filterValue.toLowerCase()) ||
    room.feePerMonth.toString().includes(this.filterValue.toLowerCase()) ||
    room.postingDate.includes(this.filterValue.toLowerCase())
  );
}

sort(column: string) {
  console.log('filtredRoomData after sorting:', this.filteredRoomData);
  if (this.sortColumn === column) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortColumn = column;
    this.sortDirection = 'asc';
  }
  this.filteredRoomData.sort((a, b) => {
    const valueA = a[column];
    const valueB = b[column];
    if (valueA < valueB) {
      return this.sortDirection === 'asc' ? -1 : 1;
    } else if (valueA > valueB) {
      return this.sortDirection === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  });
}

updateData(){
  this.filteredRoomData = [...this.roomData];

}
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
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 4,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 5,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 6,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 7,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 8,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 9,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 10,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 11,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 12,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 13,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 14,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 15,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 16,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 17,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 18,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 19,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 20,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 21,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 22,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 23,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 24,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 25,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 26,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 27,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 28,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 29,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 30,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 31,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 32,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 33,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 34,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 35,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 36,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 37,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 38,
      seater: 'Double',
      roomNumber: '102',
      feePerMonth: 700,
      postingDate: '2023-02-01',
      isDropdownOpen: false
    },
    {
      serialNumber: 39,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },

    {
      serialNumber: 40,
      seater: 'Single',
      roomNumber: '101',
      feePerMonth: 500,
      postingDate: '2023-01-01',
      isDropdownOpen: false
    },

    
  ];
  pagesToShow: (number | 'eclipse')[] =[];

    ngOnInit() {
    this.updateDisplayedData();
  }
  toggleDropdown(room: RoomData) {
    room.isDropdownOpen = !room.isDropdownOpen;
    this.roomData
      .filter(r => r !== room && r.isDropdownOpen)
      .forEach(r => r.isDropdownOpen = false);
  }
  updateEntriesToShow(event: any) {
    this.entriesToShow = parseInt(event.target.value, 10);
    this.currentPage = 1; // Reset to the first page when changing entries to show
    this.updateDisplayedData();
  }
  calculatePages(){

    const totalEntries = this.roomData.length;
    const totalPgaes= Math.ceil(totalEntries / this.entriesToShow);
    this.pages = Array.from({ length: totalPgaes}, (_, index) => index +1);
  }

    gotoPages(page: number){
      this.currentPage = page;
      this.updateDisplayedData();
    }
  updateDisplayedData() {
    const startIndex = (this.currentPage - 1) * this.entriesToShow;
    const endIndex = startIndex + this.entriesToShow;
    this.displayedData = this.roomData.slice(startIndex, endIndex);
  }
  onPageSizeChange(){
    this.currentPage = 1;
    this.calculatePages();
    this.updateDisplayedData();
  }
  
  getEntriesRange(): string{
    const startIndex = (this.currentPage - 1) * this.entriesToShow + 1;
    const endIndex = Math.min(this.currentPage * this.entriesToShow, this.roomData.length);
    return `${startIndex}-${endIndex} of ${this.roomData.length}`;
  
  }
  nextPage() {
    const totalEntries = this.roomData.length;
    const totalPages = Math.ceil(totalEntries / this.entriesToShow);

    console.log('currentPage:', this.currentPage);
    console.log('totalPages', totalPages);

    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.updateDisplayedData();
    }

  }
  previousPage() {
    console.log('currentPage:', this.currentPage);
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedData();
    }
  }
}