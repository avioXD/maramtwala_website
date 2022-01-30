import { Component, OnInit, ViewChild, ElementRef, Input, Output , EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { setUserLogedinState } from 'src/app/store/user/user.action';
import { getUser } from 'src/app/store/user/user.selector';
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
  
  constructor(private auth: AuthService , private _store: Store) { }
  @ViewChild('otp1') otp1: ElementRef;
  @ViewChild('otp2') otp2: ElementRef;
  @ViewChild('otp3') otp3: ElementRef;
  @ViewChild('otp4') otp4: ElementRef;
  @Output() newVerifyEvent = new EventEmitter<boolean>() 
  selectedCountry: City;
  otpSend: boolean = false;
  countries: any[];
  contactNumber: number ;
  onOTPResponse: any;
  onOTPverify: any
   isLogin: boolean
  ngOnInit(): void {
    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
  ];
  console.log(this.contactNumber)
  this._store.select(getUser).pipe(map(x=> x.isLogin)).subscribe((res)=>{
    this.isLogin = res
  })

  }
  timmer: any;
  onOtpChange(otp) {
    this.otp = otp;
  }
  sendOtp(){
      this.auth.sendOtp({phone: this.contactNumber, isLogin: this.isLogin}).subscribe((res)=>{
        console.log(res)
        this.otpSend = true
    //      this._store.dispatch(setUserLogedinState({islogin: true}))
      },(err)=>{
        console.log(err )
        this._store.dispatch(setUserLogedinState({islogin: false}))
      })
  }
  verifyOtp(){
      let creds = {
        phone: this.contactNumber, code: this.otp, isLogin: this.isLogin
      } 
      if(!this.isLogin){
        this.auth.verifyOtpSignup(creds).subscribe((res)=>{
          this.onOTPverify = res
            this.newVerifyEvent.emit(true)
        },(err)=>{
  
        })
      }else{
        this.auth.verifyOtpLogin(creds).subscribe((res)=>{
          this.onOTPverify = res
           this.newVerifyEvent.emit(true)
        },(err)=>{
  
        })
      }
       
  }

  otp : number []  
  onKeyUp(i){
    switch(i){
      case 1: if(this.otp[0]<10) this.otp2.nativeElement.focus();   break;
      case 2: if(this.otp[1]<10) this.otp3.nativeElement.focus();   break;
      case 3: if(this.otp[2]<10) this.otp4.nativeElement.focus();  break;
      case 4: if(this.otp[3]<10) this.otp4.nativeElement.focus() ; break;
    }
  }


}
