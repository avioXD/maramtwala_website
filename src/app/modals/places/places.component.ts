import { Component, OnInit  } from '@angular/core';
import { Places, } from '../../model/structure.model';
import { StateService } from 'src/app/service/state.service';
import { ApiService } from 'src/app/service/api.service';
import { LocationState } from 'src/app/store/user/user.state';
declare var google: any
 

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
  options: any;
  selectedPosition: any;
  overlays: any
  address:any 
  ngOnInit(): void {
    this._state.getSwitch_places().subscribe(((res: boolean)=>{
      this.visible = res
      if(this.visible){
        this._api._getServiceAvailablePlaces_API().subscribe((res=>{
          this.places = res
        }))
      }
      
  }))
    
  this._state.getCurrentGeoLocation()
  this._state.getUserCurrentLocation().subscribe(res=>{
    this.options = {
      center: {lat: res.lat, lng: res.lon},
      zoom: 16
      };
      this.overlays.push(new google.maps.Marker({ position: { lat: res.lat, lng: res.lon } ,title:"My Position"  }));
  })
  this.overlays = []
  }
  onHide(){
    this.visible = false
    this._state.setSwitch_places(false)
   }
   handleMapClick(event) {
    this.selectedPosition = event.latLng;
    this.clearMarker()
    this.addMarker()
    }
    addMarker( ){
      this.overlays.push(new google.maps.Marker({ position: { lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng() } ,title:"My Position" }));
      const userlocation: LocationState = {
        lat: this.selectedPosition.lat(),
        lon: this.selectedPosition.lng()
      }
      this._state.setUserCurrentLocation(userlocation)
      this._api._getUserAddressPosition_API(userlocation).subscribe((json:any) => {
        let address, pin;
        let a = json.results.filter(r => r.address_components.filter(a => a.types.includes('postal_code')).length > 0);
        if (a.length > 0) {
            address = a[0].formatted_address;
            pin = a[0].address_components.filter(a => a.types.includes('postal_code'))[0].long_name;
        }
        this.address = "Address: "+address+" ,Pin: "+pin;
        // console.log(address);
        // console.log(pin);
    })
    }
    clearMarker(){
      this.overlays = []
    }


}
