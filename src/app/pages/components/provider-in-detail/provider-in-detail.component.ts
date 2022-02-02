import { Component, Input, OnInit } from '@angular/core';
import { ProviderModel } from 'src/app/model/provider.model';
import { ApiService } from 'src/app/service/api.service';
 
@Component({
  selector: 'app-provider-in-detail',
  templateUrl: './provider-in-detail.component.html',
  styleUrls: ['./provider-in-detail.component.scss']
})
export class ProviderInDetailComponent implements OnInit {
  @Input() pagecode: string
  providers: any[];
  constructor(private _api: ApiService) { }
  rating: number[] = []
      ngOnInit() {
     ///get providers
  this._api._getProviderByPageId_API(this.pagecode).subscribe((res)=>{
    this.providers = res
  })
       
  }

}
