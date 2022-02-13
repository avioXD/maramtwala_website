import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';
import { StateService } from 'src/app/service/state.service';
import { CartState } from 'src/app/store/shared/shared.state';
import { LocationState } from 'src/app/store/user/user.state';
declare var google: any
@Component({
  selector: 'app-carted-items',
  templateUrl: './carted-items.component.html',
  styleUrls: ['./carted-items.component.scss']
})
export class CartedItemsComponent implements OnInit {

  constructor(private _state: StateService, private _activeRoute: ActivatedRoute, private _api: ApiService, private toast: ToastrService) { }
  uid: string
  date: Date = new Date()
  cartItems: CartState[]
  total_payble: number
  options: any;
  selectedPosition: any;
  overlays: any
  ngOnInit(): void {
    
    this.total_payble = 0
      this._activeRoute.paramMap.subscribe(paramMap=>{
        this.uid = paramMap.get('uid');
        this._state.getCartList().subscribe((res=>{
            this.cartItems = res
            this.date = new Date()
            this.total_payble = 0
            this.cartItems.forEach(ele=>{
              this.total_payble +=  (ele.count* ele.provider.price)
            })
        }))
      })
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
  removeItem(item: CartState){
    this._state.removeFromCart(item)
  }

  onConfirmBook(){
    let content = {
      userId: this._state.getDecryptString(this.uid),
      serviceRequests: this.cartItems.map((x: any)=>  {
        let pro = {
          serviceDetailId: x.provider.id,
          count: x.count
        }
        return pro
      })
    } 
    this._api._orderRequest_Api(content).subscribe((res=>{
        this._state.clearCart()
        this.toast.success('Order Confirmed')
        this.date = null
        this.total_payble = 0
    }),(err=>{
      this.toast.error('Server Error')
    }))
    console.log(content)
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
    }
    clearMarker(){
      this.overlays = []
    }

}
