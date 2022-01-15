import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './modals/login-register/login-register.component';
import { CreatePasswordComponent } from './modals/login-register/register/create-password/create-password.component';
import { RegisterComponent } from './modals/login-register/register/register.component';
import { UserDetailsComponent } from './modals/login-register/register/user-details/user-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    RouterModule.forChild([
      {
        path:'register',
        component: RegisterComponent,
        children: [
          {path:'', redirectTo: 'userdata', pathMatch: 'full'},
          {
            path:'userdata', component: UserDetailsComponent,
          },
          {
            path: 'createpassword' , component: CreatePasswordComponent
          }
        ],
        outlet: 'registerOutlate'
      }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
