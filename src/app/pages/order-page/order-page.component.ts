import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _api: ApiService, private _state: StateService) { }
  uid: string
  ngOnInit(): void {
    this.uid = ''
    this._route.paramMap.subscribe(paramMap=>{
      this.uid = paramMap.get('uid')
      this._api._getUserOrders(this._state.getDecryptString(this.uid)   ).subscribe(res=>{
          console.log("Order List ", res)
      })
    }).unsubscribe()
    
  }

}
