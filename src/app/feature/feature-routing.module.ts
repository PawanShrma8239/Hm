import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';


const routes: Routes = [

 {path:'feature', component:FeatureComponent,children:[
  {path:'',redirectTo:'x' ,pathMatch: 'full'},

 ]},
 
 ];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
