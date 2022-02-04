import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UserRegisterModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit , OnDestroy{
@Output() newEvensnedData = new EventEmitter<UserRegisterModel>()
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
      this.newEvensnedData.emit(this.userData)
    }
  }
  ngOnDestroy(): void {
    this.clearForm()  
  }
  clearForm(){
    this.userData = {
      f_name: "",
      l_name: "",
      phone_no: "",
      alternate_no: "",
      email: "",
      address: "",
      profile:""
    }
  }
  
}
