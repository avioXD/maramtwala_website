import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { StateService } from 'src/app/service/state.service';
import { ProviderState } from 'src/app/store/shared/shared.state';

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
  ngOnInit(): void {
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
                this.isProFetched = true
          },(err)=>{ console.log("Error,",err);
           this.isProFetched = true})
          })
        })
      }
      })
      
  }
  onHide(){
    this.visible = false
    this._state.setSelectProviderModalState(false)
  }
  
}
