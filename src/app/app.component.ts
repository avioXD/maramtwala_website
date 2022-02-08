import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit{
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
    ngAfterViewInit(): void {
      this._state.setCartLocalToState()
    }

    onActivate(event) {
      // window.scroll(0,0);
   
      window.scroll({ 
              top: 0, 
              left: 0, 
              behavior: 'smooth' 
       });
   
       //or document.body.scrollTop = 0;
       //or document.querySelector('body').scrollTo(0,0)
       
   }
}
