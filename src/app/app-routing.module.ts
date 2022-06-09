import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { TecnicosComponent } from './pages/tecnicos/tecnicos.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {
    path:'',component:NavbarComponent,canActivate:[AuthGuard], children:[
      {path:'home',component:HomeComponent},
      {path:'tecnicos',component:TecnicosComponent},
      {path:'user-register',component:UserRegistrationComponent}
    ]
  }
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
