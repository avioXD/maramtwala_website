import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from "aos"
import { Store } from '@ngrx/store';
import { setLoginDialogSwitch } from 'src/app/store/Shared/shared.action';
import { UserendService } from 'src/app/service/userend.service';
import {Catagory} from 'src/app/model/structure.model'
 

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
    
  }


  onOpenLogin():void{
      const toggle = {
        switch: true
      }
      this.store.dispatch(setLoginDialogSwitch({toggle: true}));
  }
  

}
