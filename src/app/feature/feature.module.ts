import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';

import { RouterModule } from '@angular/router';
import { FeatureRoutingModule } from './feature-routing.module';
import { FheaderComponent } from './fheader/fheader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PayComponent } from './pay/pay.component';
import { XComponent } from './x/x.component';



@NgModule({
  declarations: [
    FeatureComponent,
    FheaderComponent,
    SidebarComponent,
    PayComponent,
    XComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
