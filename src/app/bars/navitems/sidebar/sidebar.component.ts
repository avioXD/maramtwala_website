import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { StateService } from 'src/app/service/state.service';
import { CartState, CategoryTreeState } from 'src/app/store/shared/shared.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _state: StateService , private _auth: AuthService, private _route: Router) { }
  showMenu: boolean;
  isLogin: boolean = false;
  userData: any
  searchValue: string
  Category_names: CategoryTreeState[]
  visible : boolean = false
  cartCount: number 
  cartList: CartState[] = []
  ngOnInit(): void {
    this.cartCount = 0
    this.cartList = []
    this._state.getCategoryTree().subscribe(res=>{
      this.Category_names = res
      this._state.setCategoryTree(res)
    })
    this._state.getSwitchSideMenu().subscribe(res=>{
      this.visible = res
      this._state.getCartList().subscribe(data=>{
        this.cartList =data
        this.cartCount = data.length
      })
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
  gotoCartPage(){
     let content =  this._state.getEncryptString(JSON.stringify(this.cartList))
     this._route.navigate(['/cart', content])
  }

}
