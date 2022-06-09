import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  signupForm:FormGroup
  constructor(
    public fb:FormBuilder,
    public authService:AuthService,
    public router:Router
  ) { 
    this.signupForm=this.fb.group({
      name_user:[''],
      email_user:[''],
      password:['']
    })
  }

  ngOnInit(): void {
  }
 


}
