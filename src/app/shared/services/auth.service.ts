import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/login.model';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  helpDesk:string=environment.api
  headers= new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')
  currentUser={}
  jwt:JwtHelperService= new JwtHelperService

  constructor(
     private http:HttpClient,
     public router:Router
     ) {
     
   }
  signIn(user:User){
    return this.http.post(`${this.helpDesk}/login`, user, {
      observe: 'response',
      responseType: 'text'
    })
    
  }
  setToken(auth:string){
    localStorage.setItem('access_token',auth)
  }
  isAutheticated(){
    let token= localStorage.getItem('access_token')
    if(token != null){
      return !this.jwt.isTokenExpired(token)
    }
    return false
  }

  getToken(){
    return localStorage.getItem('acesse_token')
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
