import { Component, OnInit } from '@angular/core';
import * as AOS from "aos"
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './service/auth.service';
 import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  color:any 
  title = 'marammatwala-website';
   blocked = true

  constructor(private primengConfig: PrimeNGConfig,  private _auth:AuthService ){
   this._auth.syncUserInApp() 
    AOS.init()
    this.primengConfig.ripple = true;
       
    }
    ngOnInit(){
       
    }
    
}
