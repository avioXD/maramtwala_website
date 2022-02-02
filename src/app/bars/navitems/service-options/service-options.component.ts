import { Component, OnInit } from '@angular/core';
import { CategoryTreeState } from 'src/app/store/shared/shared.state';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-service-options',
  templateUrl: './service-options.component.html',
  styleUrls: ['./service-options.component.scss']
})
export class ServiceOptionsComponent implements OnInit {
  constructor(private _state: StateService) { }
  showMenu: boolean;
  Category_names: CategoryTreeState[]
  ngOnInit(): void {
    this._state.getCategoryTree().subscribe(res=>{
      this.Category_names = res
      this._state.setCategoryTree(res)
    })
  }
  onCategorySelect(item: CategoryTreeState){
    console.log(item)
     this._state.setSubcategoryList(item.subcategory)
     this._state.setSwitch_subCategory(true)
  }

}
