import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { StateService } from 'src/app/service/state.service';
import { CartState, ProviderState } from 'src/app/store/shared/shared.state';

@Component({
  selector: 'app-select-provider',
  templateUrl: './select-provider.component.html',
  styleUrls: ['./select-provider.component.scss']
})
export class SelectProviderComponent implements OnInit {
  visible:boolean = false
  constructor(private _state: StateService, private _api: ApiService) { }
  providers: ProviderState[]
  isProFetched: boolean = false
  isLoading:boolean = false
  serviceCode: string = ""
  count: number[] = [0]
  ngOnInit(): void {
    this.isProFetched = false
    this.isLoading = false
    this.providers = []
    this._state.getSelectProviderModalState().subscribe(state=>{
      this.visible = state
      if(this.visible){
        this._state.getSelectedServiceCode().subscribe(code=>{
          this._state.getUserCurrentLocation().subscribe(location=>{
            console.log(location)
              this.isLoading = true
              this._api._getProviderByServiceCode_API({lat: location.lat,lon:location.lon, code: code}).subscribe(pro=>{
              this.providers = pro
                this.isLoading = false
                this.isProFetched = false
                if(!this.providers){
                  this.isProFetched = true
                }
          },(err)=>{ console.log("Error",err);
           this.isProFetched = true
           this.isLoading = false})
          })
        })
      }
      })
  }
  onHide(){
    this.visible = false
    this._state.setSelectProviderModalState(false)
    this.isProFetched = false
    this.isLoading = false,
    this.isProFetched = false
    this.providers = []
  }
  onBooking(pro: ProviderState, count: number){
      let addItem : CartState = {
        provider: pro,
        count: count,
        time: new Date()
      }
      this._state.addToCart(addItem)
      this.onHide()
  }
  
}
