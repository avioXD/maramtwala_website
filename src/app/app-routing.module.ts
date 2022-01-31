import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './modals/login-register/login-register.component';
import { CreatePasswordComponent } from './modals/login-register/register/create-password/create-password.component';
import { RegisterComponent } from './modals/login-register/register/register.component';
import { UserDetailsComponent } from './modals/login-register/register/user-details/user-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FashionPageComponent } from './pages/microservice/fashion-page/fashion-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SubCatagoryPageComponent } from './pages/sub-catagory-page/sub-catagory-page.component';

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
    path: 'asdwar ', component: SubCatagoryPageComponent
  },
  {
    path: 'services/:code', component: FashionPageComponent
  },
  { 
    path: 'profile', component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
