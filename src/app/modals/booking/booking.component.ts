import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { BillDetails, PostOrder } from 'src/app/model/UserModel';
import { AuthService } from 'src/app/service/auth.service';
import { UserendService } from 'src/app/service/userend.service';
import { AppState } from 'src/app/store/app.state';
import { setBokingModalSwitch } from 'src/app/store/Shared/shared.action';
import { getBookingModalState } from 'src/app/store/Shared/shared.selector';
import { BookingStepState, BookingStep_init } from 'src/app/store/Shared/shared.state';
import { getUser } from 'src/app/store/user/user.selector';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  BookingState: BookingStepState
  providers: any[]
  billDetails: BillDetails
  service: any
  provider: any
  constructor( private store: Store<AppState>, private _clientService: UserendService,
    private _auth: AuthService) { }
  visible:boolean= false
  ngOnInit(): void {
    this.store.select(getBookingModalState).subscribe((res: BookingStepState)=>{
     // console.log(res)
      this.BookingState = res
      this.visible = this.BookingState.resource.switch
    })
    this._clientService.getAllproviders().subscribe(res=>{
      this.providers = res
    })

  }
  full: boolean = false
  postOrder : PostOrder  

  onHide(){
    this.store.dispatch(setBokingModalSwitch({resource:BookingStep_init}))
  }
  byGettingProductCode(event){
      this.service = event
      this.billDetails = {
        provider : '',
        service: ''
      }
      this.provider = this.providers.filter(x=> x.code == event.code )
  }
  getProviderDetails(provider){
    this.billDetails = {
      provider : provider,
      service: this.service
    }
    console.log("Booked",this.billDetails)
      this.store.select(getUser).pipe(map(res => res.user_data.data)).pipe(map(x=> x.user)).subscribe((user:any)=>{
        console.log("User in billing", user)

        this.postOrder = {
          serviceDetailId : provider.id,
          userId : user._id
        }   

       //create bill
        this.postOrder = {
        serviceDetailId : provider.id,
        userId : user._id
      }  
        this.full = true
      })
       
  }

  confirmOrder(){
      this._clientService.submitOrder(this.postOrder).subscribe(res=>{
         console.log(res)
         let resource = {
          resource:{
            switch: false,
            microservices: []
          }
        }
         this.store.dispatch(setBokingModalSwitch({resource: resource}))
      })
  }
}
