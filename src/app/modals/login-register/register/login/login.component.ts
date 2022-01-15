import { Component, OnInit } from '@angular/core';
export interface LoginCredentials{
  username: string,
  password: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginCred: LoginCredentials = {
    username: "",
    password: ""
  }
  otpSend: boolean = false;
  otpLogin: boolean = false

  ngOnInit(): void {
  }
   switch(){
     this.otpLogin = !this.otpLogin
   }
   switchOtp(){
     this.otpSend = !this.otpSend
   }
}
