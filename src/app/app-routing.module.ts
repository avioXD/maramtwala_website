import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { SelectProviderComponent } from './modals/select-provider/select-provider.component';
import { CartedItemsComponent } from './pages/carted-items/carted-items.component';
import { FAQComponent } from './pages/faq/faq.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SubCategoryPageComponent } from './pages/sub-category-page/sub-category-page.component';
import { TermsComponent } from './pages/terms/terms.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomePageComponent,  
  },
  {
    path: '404error', component: PageNotFoundComponent
  },
  {
    path: 'sub_catagory/:code', component: SubCategoryPageComponent,  canActivate: [AuthGuard] 
  },
  { 
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
    },
  {
    path: 'cart/:uid', component: CartedItemsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'orders/:uid' ,  component: OrderPageComponent
  },
  {
    path: 'terms', component: TermsComponent
  },
  {
    path: 'faq_seller_portal' ,  component: FAQComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
