import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { XComponent } from './x/x.component';



const routes: Routes = [

 {path:'feature', component:FeatureComponent,children:[
  {path:'',redirectTo:'x' ,pathMatch: 'full'},
   {path:'x',component:XComponent},


   
 ]},
 
 
 
 ];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
