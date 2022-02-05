import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/service/auth.service';
import { StateService } from 'src/app/service/state.service';

 
 
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  
  visible!:boolean;
  isLoginToSignup: boolean = true
  constructor(
      private _state: StateService,
      private _auth: AuthService
     ) { }

  ngOnInit(): void {
      this._state.getSwitch_signuplogin().subscribe((res: boolean)=>{
        this.visible = res
        if(!res){
          
        }
      })
      this._state.getLoginToSignUp().subscribe((res: boolean)=>{
        this.isLoginToSignup = res
      })

  }
  onClose(): void{
    this._state.setSwitch_signuplogin(false)
  }
  switchPage(state: boolean ):void{
      this._state.setLoginToSignUp(state)
  }
 
}
