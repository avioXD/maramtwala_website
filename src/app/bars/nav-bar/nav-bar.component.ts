import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from "aos"
import { Store } from '@ngrx/store';
import { setLoginDialogSwitch } from 'src/app/store/Shared/shared.action';


 

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
    console.log(verticalOffset)
    if(verticalOffset >= 70){
      this.scrolled = true
    }
    else this.scrolled = false;
     
  }

  scrolled:boolean = false
  constructor(private store: Store) { }
  value:any
  ngOnInit(): void {
    if(this.scrolled){
      AOS.refresh()
    }
    
  }


  onOpenLogin():void{
      const toggle = {
        switch: true
      }
      this.store.dispatch(setLoginDialogSwitch({toggle: true}));
  }
  

}
