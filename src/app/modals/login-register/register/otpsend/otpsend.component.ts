import { Component, OnInit, Output , EventEmitter, OnDestroy} from '@angular/core';
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
export class OtpsendComponent implements OnInit, OnDestroy {
  
  constructor(private _state: StateService, private _auth: AuthService, ) { }
  @Output() newEvent_Signup = new EventEmitter<{phone: string}>() 
  @Output() newEvent_Login = new EventEmitter<any>()
  

  isLoading: boolean = false
  OTP: string
  phone_number: string
  switchOtpField: boolean = false
  isOTP : boolean = false
  isSnedOtpLoading = false
  text: string = "send OTP"
  isforLogin: boolean
  errorMessage: string =""
  ngOnInit(): void {
    this._state.getLoginToSignUp().subscribe(res=>{
      this.isforLogin = res
    })
    this.OTP = "",
    this.phone_number = ""

  }
  timmer: any;
  // onOtpChange(otp) {
  //   this.otp = otp;
  // }
  sendOtp(){
    this.isSnedOtpLoading = true
    setTimeout(() => {
      if(this.isforLogin){
        this._auth._otpSendLogin(this.phone_number).subscribe((result)=>{
           if(result==200){
            this.switchOtpField = true
            this.OTP = ""
            this.isSnedOtpLoading = false
          }  
           
        },(err)=>{
          console.log("Error",err.status)
          if(err.status == 500){
            this.showErrorMessage('Invalid number')
            this.clearForm()
            this.resendOTP()
          }
          if(err.status == 401){
            this.showErrorMessage('New User')
            this._state.setLoginToSignUp(false)
            this.clearForm()
          } 
        })
      }else{
       this._auth._otpSendSignUp(this.phone_number).subscribe((result)=>{
         if(result == 200){
          this.switchOtpField = true
           this.OTP = ""
          this.isSnedOtpLoading = false
        } 
       },(err)=>{
         console.log(err)
         if(err.status == 500){
          this.showErrorMessage('Invalid number')
          this.clearForm()
          this.resendOTP()
        }
        if(err.status == 401){
          this.clearForm()
          this._state.setLoginToSignUp(false)
        }
       })
      }
    }, 1000);
      
      
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
        if(result == 200){
          this.clearForm()
          this._state.setUserIsLogin(true)
          this._state.setSwitch_signuplogin(false)
        }   
      },(err)=>{
          this.showErrorMessage('worng OTP')
          this.clearForm()
          this.resendOTP()
      })
    }else{
      this._auth._otpVerifySignUp(creds).subscribe((result: any)=>{
        if(result == 200){
          this.newEvent_Signup.emit({phone : this.phone_number})
          this.clearForm()
        } 
    },(err)=>{
       this.showErrorMessage('worng OTP')
        this.clearForm()
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
  clearForm(){
    this.text = "send OTP"
    this.isLoading = false
    this.OTP = ""
    this.isOTP = false
    this.isSnedOtpLoading = false
   this.phone_number = ''
   this.switchOtpField = false
  }
  
  showErrorMessage(str: string){
    setTimeout(() => {
      this.errorMessage = ''
    }, 3000);
    return this.errorMessage = str
     
  }
  ngOnDestroy(): void {
      this.clearForm()
  }
}
