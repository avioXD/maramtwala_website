import { Component, OnInit } from '@angular/core';
import { City, Category, SavedPlace, Offers, Exclusive} from '../../model/structure.model';
 
//

import { LocationState } from 'src/app/store/user/user.state';
import { StateService } from 'src/app/service/state.service';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoryTreeState } from 'src/app/store/shared/shared.state';


 


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  
   
  images: any[]
  val: any
  cities!: City[];
  catagories: CategoryTreeState[] ;
  modalShow: boolean = false
  currentLocation !: LocationState ;
  offers!: Offers[]; 
  exclusiveTemp!: Exclusive[]
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor(private _state: StateService, private _api: ApiService , private _auth: AuthService ) { 

  }
   
  ngOnInit(): void {
     this._state.getCategoryTree().subscribe(res=>{
       this.catagories = res
     })
  this._auth.syncUserInApp()
  //offers: 
  this._api._getOfferList_API().subscribe((data:Offers[])=>{
    this.offers = data
  })
  //excluve data set : 
  this._api._getExclusiveOffers().subscribe((data:Exclusive[])=>{
    this.exclusiveTemp = data
  })
 

 
  }
  onOALswitchOpen(){
   this._state.setSwitch_places(true)
  }

  onOpenMicroservice(item:any ){
    
  }

  


}
