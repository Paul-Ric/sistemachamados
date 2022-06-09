import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/core/sweet-alert/sweet-alert.service';
import { User } from 'src/app/models/login.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:User= new User()
  headers = new HttpHeaders()
  
  form:FormGroup
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private auth:AuthService,
    private sweet:SweetAlertService
  ) {
    this.form=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.auth.signIn(this.usuario).subscribe((res:any) => {
      this.auth.setToken(res.headers.get('Authorization').substring(7));
      this.router.navigate([''])
    }, () => {
      this.sweet.showErro('Usuário e/ou senha inválidos');
    })
  }

}
