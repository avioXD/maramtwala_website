import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';
import { StateService } from 'src/app/service/state.service';
import { CartState } from 'src/app/store/shared/shared.state';

@Component({
  selector: 'app-carted-items',
  templateUrl: './carted-items.component.html',
  styleUrls: ['./carted-items.component.scss']
})
export class CartedItemsComponent implements OnInit {

  constructor(private _state: StateService, private _activeRoute: ActivatedRoute, private _api: ApiService, private toast: ToastrService) { }
  uid: string
  date: Date = new Date()
  cartItems: CartState[]
  total_payble: number
  ngOnInit(): void {
    
    this.total_payble = 0
      this._activeRoute.paramMap.subscribe(paramMap=>{
        this.uid = paramMap.get('uid');
        this._state.getCartList().subscribe((res=>{
            this.cartItems = res
            this.date = new Date()
            this.total_payble = 0
            this.cartItems.forEach(ele=>{
              this.total_payble +=  (ele.count* ele.provider.price)
            })
        }))
      })
       
  }
  removeItem(item: CartState){
    this._state.removeFromCart(item)
  }

  onConfirmBook(){
    let content = {
      userId: this._state.getDecryptString(this.uid),
      serviceRequests: this.cartItems.map((x: any)=>  {
        let pro = {
          serviceDetailId: x.provider.id,
          count: x.count
        }
        return pro
      })
    } 
    this._api._orderRequest_Api(content).subscribe((res=>{
        this._state.clearCart()
        this.toast.success('Order Confirmed')
        this.date = null
        this.total_payble = 0
    }),(err=>{
      this.toast.error('Server Error')
    }))
    console.log(content)
  }

}
