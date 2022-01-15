import { Component, OnInit } from '@angular/core';
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
  
  sendOtp(){
    this.otpSend = false
    this.auth.sendOTP(this.contactNumber).subscribe((response:OtpModel)=>{
      console.log(response)
      this.otpResponse = response;
      if(response.status == 'success'){
        this.otpSend = true
      }
    }, (err)=>{
      console.log("Error",err)
    })
  }
}
