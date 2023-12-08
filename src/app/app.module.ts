import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GamesComponent } from './games/games.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';
import { GuestRegisterationComponent } from './guest-registeration/guest-registeration.component';
import { ManageGuestComponent } from './manage-guest/manage-guest.component';
import { ReportComponent } from './report/report.component';
import { AddARoomComponent } from './add-a-room/add-a-room.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { RecentReservationsComponent } from './recent-reservations/recent-reservations.component';
import { TRANSACTIONSComponent } from './transactions/transactions.component';
import { PayComponent } from './pay/pay.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { RegistrationComponent } from './registration/registration.component';
import { VisitInformationComponent } from './visit-information/visit-information.component';
import { VisitHistoryComponent } from './visit-history/visit-history.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    GamesComponent,
    MainComponent,
    LoginComponent,
    ContactComponent,
    UserRegisterComponent,
    ManageRoomsComponent,
    GuestRegisterationComponent,
    ManageGuestComponent,
    ReportComponent,
    AddARoomComponent,
    MyAccountComponent,
    AddressBookComponent,
    RecentOrdersComponent,
    RecentReservationsComponent,
    TRANSACTIONSComponent,
    PayComponent,
    ComplaintComponent,
    RegistrationComponent,
    VisitInformationComponent,
    VisitHistoryComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
