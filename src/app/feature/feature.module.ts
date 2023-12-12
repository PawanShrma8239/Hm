import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';

import { RouterModule } from '@angular/router';
import { FeatureRoutingModule } from './feature-routing.module';

import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [
    FeatureComponent,
   
    ReportComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
