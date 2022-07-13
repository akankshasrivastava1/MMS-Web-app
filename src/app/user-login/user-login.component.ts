import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
import { User} from '../shared/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  public loginForm !: FormGroup;
  public loginObj = new User();
  constructor(private fb :FormBuilder, private http : HttpClient,private router : Router,private api : ApiService) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.required]
    });
   localStorage.clear();
  }
  login(){
  //   this.http.get<any>("http://localhost:3000/signupUsers")
  //   .subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  //     });
  //     if(user){
  //       alert("Login Success!!");
  //       this.router.navigate(['dashboard']);
  //         this.loginForm.reset();
  //     }
  //   },err=>{
  //     alert("Something went wrong!!")
  //   })
  this.loginObj.UserName = this.loginForm.value.email;
  this.loginObj.Password = this.loginForm.value.password;
  this.api.login(this.loginObj)
  .subscribe(res=>{
    alert(res.message);
    this.router.navigate(['user']);
    localStorage.setItem('token',res.token);
    localStorage.setItem('userType',res.userType);
  },err=>{
    alert("soomething went wrong")
  })
  }

}