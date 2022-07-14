import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  u_1: any;
  p_2: any;
  p2: any;
  status1: any;

  constructor() { }

  ngOnInit(): void {
  }

 passrec(usrname1: any, psword1: any, psword2:any ) {
    this.u_1=usrname1;
    this.p_2=psword1;
    this.p2=psword2;

    if(this.p_2==this.p2){
      this.status1 = "Password Recovered";
    }
    else{
      this.status1 = " Password is not matching !"
    }

}
}
