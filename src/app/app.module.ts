import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//imported Modules
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//primeng module
import { PrimeNGModule } from './modules/prime-ng/prime-ng.module';
import {MatIconModule} from '@angular/material/icon';
//History: 
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
//
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { ImageCropperModule } from 'ngx-image-cropper';
import {NgxImageCompressService} from "ngx-image-compress";

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
import { SubCategoryPageComponent } from './pages/sub-category-page/sub-category-page.component';
import { SubCategoriesComponent } from './bars/navitems/sidebar/sub-categories/sub-categories.component';
import { ProviderInDetailComponent } from './pages/components/provider-in-detail/provider-in-detail.component';
import { CartedItemsComponent } from './pages/carted-items/carted-items.component';
import { SidebarComponent } from './bars/navitems/sidebar/sidebar.component';
import { SelectProviderComponent } from './modals/select-provider/select-provider.component';
import { TermsComponent } from './pages/terms/terms.component';
import { FAQComponent } from './pages/faq/faq.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { AboutComponent } from './pages/about/about.component';

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
    SubCategoryPageComponent,
    SubCategoriesComponent,
    ProviderInDetailComponent,
    CartedItemsComponent,
    SidebarComponent,
    SelectProviderComponent,
    TermsComponent,
    FAQComponent,
    OrderPageComponent,
    AboutComponent,
    
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
    MatIconModule,
    ImageCropperModule,
     
    StoreModule.forRoot(appReducer),
  ],
  providers: [{provide:LocationStrategy , useClass:HashLocationStrategy },NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
