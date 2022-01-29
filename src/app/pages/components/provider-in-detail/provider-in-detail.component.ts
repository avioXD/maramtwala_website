import { Component, Input, OnInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import { ProviderModel } from 'src/app/model/ProviderModel';
import { UserendService } from 'src/app/service/userend.service';

@Component({
  selector: 'app-provider-in-detail',
  templateUrl: './provider-in-detail.component.html',
  styleUrls: ['./provider-in-detail.component.scss']
})
export class ProviderInDetailComponent implements OnInit {
  @Input() pageID: string
  providers: ProviderModel[];
  constructor(private _ClientService: UserendService,) { }
  rating: number[] = []
      ngOnInit() {
     ///get providers
     this._ClientService.getProviderByCode(this.pageID).subscribe(pro=>{
       this.providers = pro
     })
       
  }

}
