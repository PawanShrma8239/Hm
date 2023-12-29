import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { RouterModule } from '@angular/router';
import { FeatureRoutingModule } from './feature-routing.module';
import { FheaderComponent } from './fheader/fheader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GuestRegistrationComponent } from './guest-registration/guest-registration.component';
import { ManageGuestComponent } from './manage-guest/manage-guest.component';
import { AddARoomComponent } from './add-a-room/add-a-room.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { RecentReservationsComponent } from './recent-reservations/recent-reservations.component';
import { RegistrationComponent } from './registration/registration.component';
import { VisitInformationComponent } from './visit-information/visit-information.component';
import { VisitHistoryComponent } from './visit-history/visit-history.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PayComponent } from './pay/pay.component';
import { ComplaintComponent } from './complaint/complaint.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FfooterComponent } from './ffooter/ffooter.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EditRoomDetailsComponent } from './edit-room-details/edit-room-details.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FeatureComponent,
    FheaderComponent,
    SidebarComponent,
    GuestRegistrationComponent,
    ManageGuestComponent,
    AddARoomComponent,
    ManageRoomsComponent,
    MyAccountComponent,
    AddressBookComponent,
    RecentOrdersComponent,
    RecentReservationsComponent,
    RegistrationComponent,
    VisitInformationComponent,
    VisitHistoryComponent,
    TransactionsComponent,
    PayComponent,
    ComplaintComponent,
    
    DashboardComponent,
    FfooterComponent,
    ViewMenuComponent,
    ReservationComponent,
    EditRoomDetailsComponent,
   
  ],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
