import { Component, OnInit } from '@angular/core';
import * as AOS from "aos"
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './service/auth.service';
 import { environment } from 'src/environments/environment';
import { StateService } from './service/state.service';
import { ApiService } from './service/api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  color:any 
  title = 'marammatwala-website';
   blocked = true

  constructor(private primengConfig: PrimeNGConfig,  private _auth:AuthService, private _state: StateService , private _api: ApiService ){
   this._auth.syncUserInApp() 
    AOS.init()
    this.primengConfig.ripple = true;
      this._state.setWindowSize(window.innerWidth)
    }
    ngOnInit(){
      this._api._getHomeCategory_API().subscribe(res=>{
        // await this._state.getCurrentGeoLocation()
          this._state.getCurrentGeoLocation()
      })
    }
    
}
