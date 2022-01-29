import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setBokingModalSwitch } from 'src/app/store/Shared/shared.action';
import { getBookingModalState } from 'src/app/store/Shared/shared.selector';
import { BookingStepState, BookingStep_init } from 'src/app/store/Shared/shared.state';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  BookingState: BookingStepState
  constructor( private store: Store<AppState>) { }
  visible:boolean= false
  ngOnInit(): void {
    this.store.select(getBookingModalState).subscribe((res: BookingStepState)=>{
      console.log(res)
      this.BookingState = res
      this.visible = this.BookingState.resource.switch
    })
  }
  onHide(){
     
    this.store.dispatch(setBokingModalSwitch({resource:BookingStep_init}))
  }
}
