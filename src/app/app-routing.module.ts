import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FeatureComponent } from './feature/feature.component';
import { LogoutComponent } from './logout/logout.component';
import { MyAccountComponent } from './feature/my-account/my-account.component';




const routes: Routes = [
 { path: '', redirectTo: 'feature', pathMatch: 'full' }, // Redirect empty path to '/home'
{ path: 'main', component: MainComponent },
 {path:'login', component:LoginComponent},
{path:'feature', component:FeatureComponent},
{path:'logout', component: LogoutComponent},
{path : 'my-account', component: MyAccountComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }