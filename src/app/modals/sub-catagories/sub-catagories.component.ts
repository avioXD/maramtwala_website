import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSubCatagoryState } from 'src/app/store/Shared/shared.selector';
import { setSubCatagory } from 'src/app/store/Shared/shared.action';
import { SubCatState, Sub_model } from 'src/app/store/Shared/shared.state';
import { Sub_catagory_init } from 'src/app/store/Shared/shared.state';
@Component({
  selector: 'app-sub-catagories',
  templateUrl: './sub-catagories.component.html',
  styleUrls: ['./sub-catagories.component.scss']
})
export class SubCatagoriesComponent implements OnInit {

  constructor(private store: Store) { }
  items: Sub_model[]
  display: boolean
  ngOnInit(): void {
    this.store.select(getSubCatagoryState).subscribe((d : Sub_model[])=>{
      this.items = d ;
      console.log("Shoing Sub catagories", this.items[2])
      if(this.items[0].label!=''){
        this.display = true
      }
    })
  }
  hideBar(){
    this.items =[ { label : '', code : ''}]
    let x : SubCatState = {
      lists: this.items
    }
    this.store.dispatch(setSubCatagory({items: x}))
    this.display= false
  }

}
