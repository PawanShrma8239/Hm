import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';

import { RouterModule } from '@angular/router';
import { FeatureRoutingModule } from './feature-routing.module';
import { GuestRegistrationComponent } from './guest-registration/guest-registration.component';
import { ManageGuestComponent } from './manage-guest/manage-guest.component';
import { AddARoomComponent } from './add-aroom/add-aroom.component';
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
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [
    FeatureComponent,
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
    ReportComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
