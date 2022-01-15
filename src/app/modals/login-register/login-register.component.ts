import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store"
import { AppState } from 'src/app/store/app.state';
import { setLoginDialogSwitch } from 'src/app/store/Shared/shared.action';
import { getLoginModalSwitch } from 'src/app/store/Shared/shared.selector';
 

 


 

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  display!:boolean;
  constructor(
    private store: Store<AppState>, 
     ) { }
   newuser$: boolean = false

   
  ngOnInit(): void {
    this.store.select(getLoginModalSwitch).subscribe((v)=>{
      this.display = v;
    })

  }
  onClose(): void{
    this.store.dispatch(setLoginDialogSwitch({toggle: false}))
  }
  switchPage(state: boolean ):void{
    this.newuser$ = state
  }
   
}
