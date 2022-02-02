import { Component, OnInit  } from '@angular/core';
import { Places, } from '../../model/structure.model';
import { StateService } from 'src/app/service/state.service';
import { ApiService } from 'src/app/service/api.service';
 
 

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
 
})
export class PlacesComponent implements OnInit {
  
  constructor( private _state: StateService, private _api : ApiService ) {
   }
   visible: boolean = false
  places!:Places[]
  ngOnInit(): void {
    this._api._getServiceAvailablePlaces_API().subscribe((res=>{
      this.places = res
    }))
    this._state.getSwitch_places().subscribe(((res: boolean)=>{
        this.visible = res
    }))
  }
  onOALswitchClose(){
    this._state.setSwitch_places(false)
   }

}
