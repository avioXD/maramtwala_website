import { Component, OnInit } from '@angular/core';
import * as AOS from "aos"
import { PrimeNGConfig } from 'primeng/api';
 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  color:any 
  title = 'marammatwala-website';
   blocked: false

  constructor(private primengConfig: PrimeNGConfig,  ){
      AOS.init()
      this.primengConfig.ripple = true;
    }
    ngOnInit(){
     
    }
    
}
