import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setSelectedMicroservice } from 'src/app/store/Shared/shared.action';
import { SelectedMicroserviceState, Sub_model } from 'src/app/store/Shared/shared.state';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-select-microservice',
  templateUrl: './select-microservice.component.html',
  styleUrls: ['./select-microservice.component.scss']
})
export class SelectMicroserviceComponent implements OnInit {
  @Input() catagories:Sub_model[]
  constructor(private store: Store<AppState>,private _Activatedroute:ActivatedRoute,) { }
  selectedCatagories:SelectedMicroserviceState[]
  pageId:string
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params =>{
      this.pageId = params.get("code")})
  }
  onCheck(){
      console.log("Selected",this.selectedCatagories)
      this.store.dispatch(setSelectedMicroservice({selected_state: this.selectedCatagories}))
  }

}
