import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserRegisterModel } from 'src/app/model/UserModel';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
@Input() number : string
@Output() sendDataEvent = new EventEmitter<UserRegisterModel>()
  constructor() { }
  otpSend: boolean = false;
  userData: UserRegisterModel = {
    f_name: "",
    l_name: "",
    phone_no: "",
    alternate_no: "",
    email: "",
    address: "",
    profile:""
  }
  ngOnInit(): void {
    this.onKeyUp()
  }

  onKeyUp(){
    if(this.userData.f_name!= '' &&
    this.userData.l_name != '' &&
    this.userData.email != '' && 
    this.userData.address != ''
    ){
      let sendData: UserRegisterModel = {
        f_name: this.userData.f_name,
        l_name: this.userData.l_name,
        phone_no: this.number,
        alternate_no: this.userData.alternate_no,
        email: this.userData.email,
        address: this.userData.address,
        profile: this.userData.profile
      }
      this.sendDataEvent.emit(sendData)
    }
     
  }
  
}
