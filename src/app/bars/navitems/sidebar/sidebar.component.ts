import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { StateService } from 'src/app/service/state.service';
import { CategoryTreeState } from 'src/app/store/shared/shared.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _state: StateService , private _auth: AuthService) { }
  showMenu: boolean;
  isLogin: boolean = false;
  userData: any
  searchValue: string
  Category_names: CategoryTreeState[]
  visible : boolean = false
  ngOnInit(): void {
    this._state.getCategoryTree().subscribe(res=>{
      this.Category_names = res
      this._state.setCategoryTree(res)
    })
    this._state.getSwitchSideMenu().subscribe(res=>{
      this.visible = res
      if(this.visible){
        this._state.getCategoryTree().subscribe(res=>{
          this.Category_names = res
          this._state.setCategoryTree(res)
        })
        this._state.getUserIsLogin().subscribe(res=>{
          this.isLogin = res
          if(this.isLogin){
          this._state.getUserObject().subscribe((res)=>{
            console.log(res)
            this.userData = res
          },(err=>{}))
          }
        })
      }
    })
    
  }
  onCategorySelect(item: CategoryTreeState){
    console.log(item)
    this.showMenu = false
     this._state.setSubcategoryList(item.subcategory)
     this._state.setSwitch_subCategory(true)
  }
  onHide(){
    this._state.setSwitchSideMenu(false)
  }

  switchLoginSignup(){
    this._state.setSwitch_signuplogin(true)
    this._state.setSwitchSideMenu(false)
  }
  logOutUser(){
    this._auth.logOutUser()
  }

}
