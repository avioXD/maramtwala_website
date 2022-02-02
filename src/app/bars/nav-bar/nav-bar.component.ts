import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from "aos"
import { AuthService } from 'src/app/service/auth.service';
import { StateService } from 'src/app/service/state.service';
import { CategoryTreeState } from 'src/app/store/shared/shared.state';
import { getUser } from 'src/app/store/user/user.selector';
import { UserState } from 'src/app/store/user/user.state';
 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    event.preventDefault();
    const verticalOffset = window.pageYOffset 
    || document.documentElement.scrollTop 
    || document.body.scrollTop || 0;
    //console.log(verticalOffset)
    if(verticalOffset >= 70){
      this.scrolled = true
    }
    else this.scrolled = false;
  }
 
  scrolled:boolean = false
  isLogin: boolean = false
  userData: any
  constructor(private _state: StateService, private _auth: AuthService) { }
  value:any
  ngOnInit(): void {
    if(this.scrolled){
      AOS.refresh()
    }
  
    this._state.getUserIsLogin().subscribe(res=>{
      this.isLogin = res
      if(this.isLogin){
      this._state.getUserObject().subscribe((res)=>{
        this.userData = res
      },(err=>{}))
      }
    })
     

  }
  switchLoginSignup(){
   
    this._state.setSwitch_signuplogin(true)
  }
  
}
