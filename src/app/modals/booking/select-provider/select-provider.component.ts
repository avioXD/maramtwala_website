import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilteredProviderModel, ProviderModel } from 'src/app/model/ProviderModel';
import { UserendService } from 'src/app/service/userend.service';
import { AppState } from 'src/app/store/app.state';
import { getSelectedMicroServiceList } from 'src/app/store/Shared/shared.selector';
import { SelectedMicroserviceState } from 'src/app/store/Shared/shared.state';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-select-provider',
  templateUrl: './select-provider.component.html',
  styleUrls: ['./select-provider.component.scss']
})
export class SelectProviderComponent implements OnInit {
  pageId: string;

  constructor(private store: Store<AppState>, private _ClientService: UserendService,private _Activatedroute:ActivatedRoute,) { }
  provider:ProviderModel[]
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params =>{
      this.pageId = params.get("code")})
    this.store.select(getSelectedMicroServiceList).subscribe((res:SelectedMicroserviceState[])=>{
      console.log(res)
      let Pro : FilteredProviderModel
      this._ClientService.getProviderByCode(this.pageId).subscribe(res=>{
          this.provider = res
      })
    })
  }

}
