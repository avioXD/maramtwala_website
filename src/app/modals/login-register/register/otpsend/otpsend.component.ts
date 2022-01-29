import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
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
  
  constructor(private auth: AuthService) { }
  @ViewChild('otp1') otp1: ElementRef;
  @ViewChild('otp2') otp2: ElementRef;
  @ViewChild('otp3') otp3: ElementRef;
  @ViewChild('otp4') otp4: ElementRef;
  
  selectedCountry: City;
  otpSend: boolean = false;
  countries: any[];
  contactNumber: number ;
  otpResponse: OtpModel 
   
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
  }
  onOtpChange(otp) {
    this.otp = otp;
  }
  sendOtp(){
    this.otpSend = false
    this.auth.sendOTP(this.contactNumber).subscribe((response:OtpModel)=>{
      console.log(response)
      this.otpResponse = response;
      if(response.status == 'success'){
        this.otpSend = false
      }
    }, (err)=>{
      console.log("Error",err)
    })
  }
  

  otp : any = {
    one: "",
    two: "",
    three: "",
    four: ""
  }

  onKeyUp(i){
    switch(i){
      case 1: if(this.otp.one<10) this.otp2.nativeElement.focus();   break;
      case 2: if(this.otp.two<10) this.otp3.nativeElement.focus();   break;
      case 3: if(this.otp.three<10) this.otp4.nativeElement.focus();  break;
      case 4: if(this.otp.four<10) this.otp4.nativeElement.focus() ; break;
    }
  }


}
