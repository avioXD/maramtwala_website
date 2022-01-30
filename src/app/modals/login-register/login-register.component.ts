import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store"
import { map } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { setLoginDialogSwitch } from 'src/app/store/Shared/shared.action';
import { getLoginModalSwitch } from 'src/app/store/Shared/shared.selector';
import { setAuthTokenService, setUserLogedinState } from 'src/app/store/user/user.action';
import { getUser } from 'src/app/store/user/user.selector';
 
 
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
   newuser$: boolean  = false
  ngOnInit(): void {
    this.store.select(getLoginModalSwitch).subscribe((v)=>{
      this.display = v;
    })
    this.store.select(getUser).pipe(map(x=> x.isLogin)).subscribe((res)=>{
      this.newuser$ = res
    })

  }
  onClose(): void{
    this.store.dispatch(setLoginDialogSwitch({toggle: false}))
  }
  switchPage(state: boolean ):void{
    this.newuser$ = state
    this.store.dispatch(setUserLogedinState({islogin: !this.newuser$}))
  }
  onSuccess(event){
    if(event.value.token){
       this.store.dispatch(setAuthTokenService({token: event.value.token}))
       this.store.dispatch(setUserLogedinState({islogin: event.value.isLogin}))
       this.onClose()
    }
  }
   
}
