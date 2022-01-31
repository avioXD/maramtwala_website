import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { UserRegisterModel } from '../model/UserModel';
import jwtDecode from 'jwt-decode';
 
const base_url = 'https://marammatwala-api.herokuapp.com'
@Injectable({
  providedIn: 'root'
})
 
export class AuthService {

  constructor(private http: HttpClient) {

   }

   sendOtp(creds: any){
    //  return of({otp: 2456})
     return  this.http.post(`${base_url}/api/v1/auth/sentOTP`,{ phone: `+91${creds.phone}`, isLogin: creds.isLogin})
   }
   verifyOtpLogin(creds: any){
     return this.http.post(`${base_url}/api/v1/user/login`,{phone: `+91${creds.phone}`, code: creds.code})
   }
   verifyOtpSignup(creds: any){
      // return of({token: "success"})
      return this.http.post(`${base_url}/api/v1/auth/verifyOTP`,{phone: `+91${creds.phone}`, code: creds.code})
   }
   userSignup(creds: UserRegisterModel){
    // return of({token: "success"})
    return this.http.post(`${base_url}/api/v1/user/signup`, creds)
   }

   createHashKey(code){
      return code
   }
   decodeHashKey(code){
    return code
   }
   getUserDetails(token){
      return jwtDecode(token)
   }
   


}
