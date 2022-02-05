import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/service/state.service';
import { ProviderState } from 'src/app/store/shared/shared.state';

@Component({
  selector: 'app-select-provider',
  templateUrl: './select-provider.component.html',
  styleUrls: ['./select-provider.component.scss']
})
export class SelectProviderComponent implements OnInit {
  visible:boolean = false
  constructor(private _state: StateService) { }
  providers: ProviderState[]
  ngOnInit(): void {
    this._state.getSelectProviderModalState().subscribe(res=>{
      this.visible = res
      this._state.getAllProvidersList().subscribe(res=>{
        this.providers = res
      })

    })
  }
  onHide(){
    this.visible = false
    this._state.setSelectProviderModalState(false)
  }
  getDistance(lat: number, lon: number){
    let distance = 0
    this._state.getCurrentGeoLocation()
       this._state.getUserCurrentLocation().subscribe(res=>{
        let data = {
          user: {
            lat: res.lat,
            lon: res.lon
          },
          provider:{
            lat: lat,
            lon: lon
          }
        }
       //console.log(Math.floor(this._state.getDistanceBetweenByLatLon(data)))
        distance= Math.floor(this._state.getDistanceBetweenByLatLon(data))
      })
      return distance
  }
}
