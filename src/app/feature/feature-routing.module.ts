import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { AddARoomComponent } from './add-aroom/add-aroom.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { GuestRegistrationComponent } from './guest-registration/guest-registration.component';
import { ManageGuestComponent } from './manage-guest/manage-guest.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { PayComponent } from './pay/pay.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { RecentReservationsComponent } from './recent-reservations/recent-reservations.component';
import { RegistrationComponent } from './registration/registration.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { VisitHistoryComponent } from './visit-history/visit-history.component';
import { VisitInformationComponent } from './visit-information/visit-information.component';




const routes: Routes = [

 {path:'feature', component:FeatureComponent,children:[

  {path:'',redirectTo:'x' ,pathMatch: 'full'},
  {path:'add-aroom',component:AddARoomComponent},
  {path:'address-book',component:AddressBookComponent},
  {path:'complaint',component:ComplaintComponent},
  {path:'guest-registration',component:GuestRegistrationComponent},
  {path:'mange-guest',component:ManageGuestComponent},
  {path:'manage-rooms',component:ManageRoomsComponent},
  {path:'my-account',component:MyAccountComponent},
  {path:'pay',component:PayComponent},
  {path:'recent-orders',component:RecentOrdersComponent},
  {path:'recent-reservations',component:RecentReservationsComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'transactions',component:TransactionsComponent},
  {path:'visit-history',component:VisitHistoryComponent},
  {path:'visit-information',component:VisitInformationComponent},
  
  
 ]},
 
 ];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
