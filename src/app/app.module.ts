import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//imported Modules
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//primeng module
import { PrimeNGModule } from './modules/prime-ng/prime-ng.module';
//History: 
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
//
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './bars/nav-bar/nav-bar.component';
import { FootBarComponent } from './bars/foot-bar/foot-bar.component';
import { PlacesComponent } from './modals/places/places.component';
import { LoginRegisterComponent } from './modals/login-register/login-register.component';
import { CreatePasswordComponent } from './modals/login-register/register/create-password/create-password.component';
import { UserDetailsComponent } from './modals/login-register/register/user-details/user-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './modals/login-register/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './modals/login-register/login/login.component';
import { OtpsendComponent } from './modals/login-register/register/otpsend/otpsend.component';
import { ServiceOptionsComponent } from './bars/navitems/service-options/service-options.component';
import { SubCatagoryPageComponent } from './pages/sub-catagory-page/sub-catagory-page.component';
import { SubCatagoriesComponent } from './modals/sub-catagories/sub-catagories.component';
import { FashionPageComponent } from './pages/microservice/fashion-page/fashion-page.component';
import { BookingComponent } from './modals/booking/booking.component';
import { SelectMicroserviceComponent } from './modals/booking/select-microservice/select-microservice.component';
import { SelectProviderComponent } from './modals/booking/select-provider/select-provider.component';
import { ProviderInDetailComponent } from './pages/components/provider-in-detail/provider-in-detail.component';

 
 

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FootBarComponent,
    PlacesComponent,
    LoginRegisterComponent,
    CreatePasswordComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    OtpsendComponent,
    ServiceOptionsComponent,
    SubCatagoryPageComponent,
    SubCatagoriesComponent,
    FashionPageComponent,
    BookingComponent,
    SelectMicroserviceComponent,
    SelectProviderComponent,
    ProviderInDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SwiperModule,
    PrimeNGModule,
    StoreModule.forRoot(appReducer),
 
  ],
  providers: [{provide:LocationStrategy , useClass:HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
