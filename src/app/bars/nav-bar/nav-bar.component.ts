import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from "aos"
import { Store } from '@ngrx/store';
import { setLoginDialogSwitch } from 'src/app/store/Shared/shared.action';
import { UserendService } from 'src/app/service/userend.service';
import {Catagory} from 'src/app/model/structure.model'
import { getUser } from 'src/app/store/user/user.selector';
import { setUserLogedinState } from 'src/app/store/user/user.action';
 

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
  catagroyStructure: Catagory[];
  scrolled:boolean = false
  isLogin: boolean = false
  constructor(private store: Store,private userendService: UserendService) { }
  value:any
  ngOnInit(): void {
    if(this.scrolled){
      AOS.refresh()
    }
    this.userendService.getMainCatagory().subscribe((response: Catagory[]) => {
      this.catagroyStructure = response;
    },(err)=>{
      //console.log(err)
    })
    
    this.store.select(getUser).subscribe((res: any)=>{
      console.log("User Data", res.user_data)
      if(res.user_data.token){
          this.isLogin = true
      }
    })

  }


  onOpenLogin():void{
      const toggle = {
        switch: true
      }
      this.store.dispatch(setLoginDialogSwitch({toggle: true}));
  }
  
}
