import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';
 
 

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
@Output() loginevent = new EventEmitter<any>()

  constructor(   ) { }
  loginCred: LoginCredentials = {
    username: "",
    password: ""
  }

  ngOnInit(): void {
     
  }
  onLogin(event: any ){
    if(event!=""){
      this.loginevent.emit(event)
    }
      
   }
}
