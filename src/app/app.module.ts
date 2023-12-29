import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { FeatureModule } from './feature/feature.module';

import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
//import { MyAccountComponent } from './my-account/my-account.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';













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
    ForgotPasswordComponent,
    

    
   
   
   
  
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule
    

   
  
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
