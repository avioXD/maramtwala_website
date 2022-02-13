import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from "aos"
import { AuthService } from 'src/app/service/auth.service';
import { StateService } from 'src/app/service/state.service';
import { CartState } from 'src/app/store/shared/shared.state';
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
  cartCount: number = 0
  constructor(private _state: StateService, private _auth: AuthService, private _route: Router) { }
  
  ngOnInit(): void {
    this.cartCount = 0
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
    this._state.getUserToken().subscribe(r=>{
      
    })
    this._state.getUserIsLogin().subscribe(res=>{
      this.isLogin = res
      if(this.isLogin){
      this._state.getUserObject().subscribe((res)=>{
       // console.log(res)
        this.userData = res
      },(err=>{}))
      }
    })
    // this._state.getCartCount().subscribe(c=> {
    //     console.log("cArt count",c)
    //     if(c){
    //       this.cartCount = c
    //     }
    // })
    this._state.getCartList().subscribe(data=>{
      this.cartCount = data.length
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
  gotoCartPage(){
     
    let content =  this._state.getEncryptString(this.userData._id)
    this._route.navigate(['/cart',content ])
 }
  gotoOrders(){
    let content =  this._state.getEncryptString(this.userData._id)
    this._route.navigate(['/orders',content ])
  }
}
