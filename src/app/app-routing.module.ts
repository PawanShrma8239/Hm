import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FeatureComponent } from './feature/feature.component';





const routes: Routes = [
 { path: '', redirectTo: 'feature', pathMatch: 'full' }, // Redirect empty path to '/home'
{ path: 'main', component: MainComponent },
{path:'login', component:LoginComponent},
{path:'feature', component:FeatureComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
