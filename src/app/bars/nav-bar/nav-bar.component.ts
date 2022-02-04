import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from "aos"
import { AuthService } from 'src/app/service/auth.service';
import { StateService } from 'src/app/service/state.service';
import { environment } from 'src/environments/environment';

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
    if(verticalOffset >= 100){
      this.scrolled = true
    }
    else this.scrolled = false;
  }
  @HostListener('window:resize', ['$event']) // for window scroll events
  onResponsive(event) {
    
    event.preventDefault();
    this._state.setWindowSize(event.target.innerWidth)
  }
  width: any
  scrolled:boolean = false
  isLogin: boolean = false
  userData: any
  value:any
  responsive: boolean
  constructor(private _state: StateService, private _auth: AuthService) { }
  
  ngOnInit(): void {
    if(this.scrolled){
      AOS.refresh()
    }
    
    this._state.getWindowSize().subscribe(res=>{
      this.width = res
       if(this.width>environment.RESPONSIVE_WIDTH){
        this.responsive = false
      }else{
        this.responsive = true
      }
    })
    this._state.getUserIsLogin().subscribe(res=>{
      this.isLogin = res
      if(this.isLogin){
      this._state.getUserObject().subscribe((res)=>{
        console.log(res)
        this.userData = res
      },(err=>{}))
      }
    })
     

  }
  switchLoginSignup(){
    this._state.setSwitch_signuplogin(true)
  }
  openSideMenu(){
    this._state.setSwitchSideMenu(true)
  }
  logOutUser(){
    this._auth.logOutUser()
  }
}
