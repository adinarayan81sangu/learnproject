import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb:FormBuilder,public route:Router) {
  this.loginForm=this.fb.group(
    {
      username:['',Validators.required],
      password:['',Validators.required]
    }
  )
   }
   onSubmit(){
    console.log(this.loginForm.value);
    this.route.navigate(["homepage"])
    
   }
  ngOnInit(): void {
    // console.log(this.loginForm.value);
  }

}
