import { Component, Input, OnInit } from '@angular/core';
import { BillDetails } from 'src/app/model/UserModel';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
@Input() bill: any
  constructor() { }
  item: any
  ngOnInit(): void {
    console.log("Provider",this.bill)
    this.item = this.bill.provider
  }

}
