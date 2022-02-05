import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectProviderComponent } from './modals/select-provider/select-provider.component';
import { CartedItemsComponent } from './pages/carted-items/carted-items.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SubCategoryPageComponent } from './pages/sub-category-page/sub-category-page.component';


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
    path: 'services', component: SubCategoryPageComponent,
  },
  {
    path: 'services/:code', component: SubCategoryPageComponent,
       
  },
  { 
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'cart', component: CartedItemsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
