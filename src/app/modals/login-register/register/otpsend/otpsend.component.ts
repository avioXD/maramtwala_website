import { Component, OnInit, ViewChild, ElementRef, Input, Output , EventEmitter} from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { StateService } from 'src/app/service/state.service';
 
interface City {
  name: string,
  code: string
}
 interface OtpModel{
  status: string,
  data: {
      messageID:  string,
      clientNo: string
  }
}


@Component({
  selector: 'app-otpsend',
  templateUrl: './otpsend.component.html',
  styleUrls: ['./otpsend.component.scss']
})
export class OtpsendComponent implements OnInit {
  
  constructor(private _state: StateService, private _auth: AuthService) { }
  @Output() newEvent_Signup = new EventEmitter<{phone: string}>() 
  @Output() newEvent_Login = new EventEmitter<any>()
  

  isLoading: boolean = false
  OTP: string
  phone_number: string
  switchOtpField: boolean = false
  isOTP : boolean = false
  text: string = "send OTP"
  isforLogin: boolean
  ngOnInit(): void {
    this._state.getLoginToSignUp().subscribe(res=>{
      this.isforLogin = res
    })
  }
  timmer: any;
  // onOtpChange(otp) {
  //   this.otp = otp;
  // }
  sendOtp(){
     if(this.isforLogin){
       this._auth._otpSendLogin(this.phone_number).pipe(map((res: any)=> res.status =='success')).subscribe((result)=>{
         this.switchOtpField = true
         this.OTP = ""
         console.log(this.OTP)
       },(err)=>{
         console.log(err)
       })
     }else{
      this._auth._otpSendSignUp(this.phone_number).pipe(map((res: any)=> res.status =='success')).subscribe((result)=>{
        this.switchOtpField = true
        this.OTP = ""
        console.log(this.OTP)
      },(err)=>{
        console.log(err)
      })
     }
      
  }
   
  isOTPcheck(){
   // console.log(this.OTPcode)
    if(this.OTP.length < 4)
    {
      this.isOTP = false
    }
    if(this.OTP.length > 4){
      this.isOTP = false
    }
    if(this.OTP.length == 4){
      this.isLoading = true
      this.isOTP = true
      this.otpVerify(this.OTP)
    }
  }

  otpVerify(code: string){
    const creds = {
      phone: this.phone_number,
       code:  code
    } 
    if(this.isforLogin){
      this._auth._otpVerifyLogin(creds).subscribe((result: any)=>{
            console.log(result)  
            this.isLoading = false
            this._state.setUserIsLogin(true)
            this._state.setSwitch_signuplogin(false)
      },(err)=>{
          this.resendOTP()
      })
    }else{
      this._auth._otpVerifySignUp(creds).subscribe((result: any)=>{
        this.isLoading = false
        this.newEvent_Signup.emit({phone : this.phone_number})
    },(err)=>{
        this.resendOTP()
    })
    }
     
}
  resendOTP(){
    this.text = "resend OTP"
    this.isLoading = false
    this.phone_number = ""
    this.OTP = ""
  }

}
