import { Injectable } from '@angular/core';
import { User } from 'src/app/pages/user-registration/shared/models/user.model';
import { Observable,throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint:string ='https://help-desk-node.herokuapp.com/cadastro'
  headers= new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')
  currentUser={}

  constructor(private http:HttpClient, public router:Router) { }

  signUp(user:User):Observable<any>{
    let api = `${this.endpoint}`
    return this.http.post(api,user).pipe(catchError(this.handleError))
  }
  signIn(user:User){
    return this.http.post<any>(`${this.endpoint}/login`,user).subscribe((response:any)=>{
      localStorage.setItem('acess_token',response.token)
      this.getUserProfile(response.name).subscribe((response)=>{
        this.currentUser= response
        this.router.navigate(['home/'+response.name])
      })
    })
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

  getUserProfile(name:string):Observable<any>{
    let api= `${this.endpoint}`
    return this.http.get(api,{headers:this.headers}).pipe(
      map((response)=>{
        return response || {}
      }),
      catchError(this.handleError)
    )
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
