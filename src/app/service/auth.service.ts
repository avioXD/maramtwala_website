import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { VerifyOTP } from '../model/UserModel';
const base_url = 'https://marammatwala-api.herokuapp.com'
@Injectable({
  providedIn: 'root'
})
 
export class AuthService {

  constructor(private http: HttpClient) {

   }

   sendOtp(creds: any){
     return  this.http.post(`${base_url}/api/v1/auth/sentOTP`,{ phone: `+91${creds.phone}`, isLogin: creds.isLogin})
   }
   verifyOtpLogin(creds: any){
    let code=0 ;
    creds.code.forEach(element => {
      code = code*10 + element
     });
     return this.http.post(`${base_url}/api/v1/user/login`,{phone: `+91${creds.phone}`, code: code})
   }
   verifyOtpSignup(creds: any){
    let code=0 ;
    creds.code.forEach(element => {
      code = code*10 + element
     });
      return this.http.post(`${base_url}/api/v1/auth/verifyOTP`,{phone: `+91${creds.phone}`, code: code})
   }
    


}
