import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserendService } from 'src/app/service/userend.service';
import { AppState } from 'src/app/store/app.state';
import { getSelectedMicroServiceList } from 'src/app/store/Shared/shared.selector';
import { SelectedMicroserviceState } from 'src/app/store/Shared/shared.state';
@Component({
  selector: 'app-select-provider',
  templateUrl: './select-provider.component.html',
  styleUrls: ['./select-provider.component.scss']
})
export class SelectProviderComponent implements OnInit {

  constructor(private store: Store<AppState>, private _ClientService: UserendService,) { }

  ngOnInit(): void {
    this.store.select(getSelectedMicroServiceList).subscribe((res:SelectedMicroserviceState[])=>{
      this._ClientService.getProviderByArray(res)
    })
     
     
  }

}
