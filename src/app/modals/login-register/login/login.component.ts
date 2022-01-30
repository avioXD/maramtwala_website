import { Component,  OnInit } from '@angular/core';
 
 

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


  constructor( ) { }
  loginCred: LoginCredentials = {
    username: "",
    password: ""
  }

  ngOnInit(): void {
     
  }
  onVerify(event: any ){
    if(event.value.token!=""){

    }
      
   }
}
