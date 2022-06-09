import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptor } from './core/interceptor/authconfig.inteceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { TecnicosComponent } from './pages/tecnicos/tecnicos.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import Swal from 'sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TecnicosComponent,
    LoginComponent,
    HomeComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
