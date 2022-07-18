import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { Forgot } from '../shared/forgot';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  public forgotForm !: FormGroup;
  public forgotObj = new Forgot();

  constructor(private fb :FormBuilder, private http : HttpClient,private router : Router,private api : ApiService) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email:["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.required]
    });
   localStorage.clear();
  }
  
  forgot(){
    this.forgotObj.Id = this.forgotForm.value.Id;
    this.forgotObj.Password = this.forgotForm.value.password;
    this.forgotObj.ConfirmPassword = this.forgotForm.value.Confirmpassword;
    this.api.login(this.forgotObj)
    .subscribe(res=>{
      alert(res.message);
      this.router.navigate(['login']);
      localStorage.setItem('token',res.token);
      localStorage.setItem('userType',res.userType);
    },err=>{
      alert("soomething went wrong")
    })
     }
//  passrec(usrname1: any, psword1: any, psword2:any ) {
//     this.u_1=usrname1;
//     this.p_2=psword1;
//     this.p2=psword2;

//     if(this.p_2==this.p2){
//       this.status1 = "Password Recovered";
//     }
//     else{
//       this.status1 = " Password is not matching !"
//     }

// }
}
