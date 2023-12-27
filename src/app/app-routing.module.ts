import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FeatureComponent } from './feature/feature.component';
import { AddARoomComponent } from './feature/add-a-room/add-a-room.component';





const routes: Routes = [
 { path: '', redirectTo: 'feature', pathMatch: 'full' }, // Redirect empty path to '/home'
{ path: 'main', component: MainComponent },
{path:'login', component:LoginComponent},
{path:'feature', component:FeatureComponent},
{path:'admin-index.html', component:FeatureComponent},
{path:'edit-room-details.html', component:AddARoomComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
