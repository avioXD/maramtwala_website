import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { StateService } from 'src/app/service/state.service';
import { SubcategoryState } from 'src/app/store/shared/shared.state';
@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {

  constructor(private _state: StateService, private _router: Router, private _api: ApiService) { }
  subCategory: any[]
  visible: boolean = false
  ngOnInit(): void {
    this._state.getSwitch_subCategory().subscribe(res=>{
      this.visible = res
    })
    this._state.getSubcategoryList().subscribe(data=>{
      this.subCategory = data
    })
  }
  hideBar(){
    this._state.setSwitch_subCategory(false)
    this._state.setSwitchSideMenu(false)
  }
   
  createhashKey(content: string){
   //console.log("Hash",content)
    return this._state.getEncryptString(content)
  }
  

}
