import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegisterModel } from '../model/user.model';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { StateService } from './state.service';
import { map } from 'rxjs';
 
const base_url = 'https://marammatwala-api.herokuapp.com'
@Injectable({
  providedIn: 'root'
})
 
export class AuthService {

  constructor(private _http: HttpClient, private _state: StateService) {

   }

   _otpSendLogin(phone: string){
    //  return of({otp: 2456})
     return  this._http.post(`${base_url}/api/v1/auth/sentOTP`,{ phone: `+91${phone}`, isLogin: true}).pipe(map((res:any)=>{
      if(res.status == 'success') return 200
      else  return  res.status
      
     }))
   }
   _otpSendSignUp(phone:string){
      return  this._http.post(`${base_url}/api/v1/auth/sentOTP`,{ phone: `+91${ phone}`, isLogin: false}).pipe(map((res:any)=>{
         if(res.status == 'success') return 200 
         else  return res.status
       }))
   }
   _otpVerifyLogin(creds: any){
     return this._http.post(`${base_url}/api/v1/user/login`,{phone: `+91${creds.phone}`, code: creds.code}).pipe(map((res: any)=>{
      if(res.status == 'success'){
         this._state.setToken(res.token)
         return 200
      } else return res.status
       
    },(err)=>{console.log(err)}))
   }
   _otpVerifySignUp(creds: any){
      // return of({token: "success"})
      return this._http.post(`${base_url}/api/v1/auth/verifyOTP`,{phone: `+91${creds.phone}`, code: creds.code}).pipe(map((res: any)=>{
         if(res.status == 'success') {
            return 200
         } 
         else return res.status
      }))
   }
   _registerUser(creds: UserRegisterModel){
    // return of({token: "success"})
    return this._http.post(`${base_url}/api/v1/user/signup`, creds).pipe(map((res: any)=>{
     console.log(res)
      if(res.status == 'success'){
         this._state.setToken(res.token)
         return 200
      } else return res.status
    } ))
   }

   logoutUser(){
      this._state.setToken('')
   }

   syncUserInApp(){
      const token = this._state.getTokenLocal()
      if(token && this._state.isTokenValid(this._state.getTokenObject(token).exp) ){
         this._state.setUserIsLogin(true)
         this._state.setToken(token)
         this._state.setIsNewUser(false)
      }
      // else{
      //    this._state.setUserIsLogin(false)
      //    this._state.setToken('')
      //    this._state.setIsNewUser(true)
      // }
   }
   _isLoggedIn(){
      this.syncUserInApp()
      return this._state.getUserIsLogin().subscribe(res=> res)
   }
   logOutUser(){
      this._state.setToken('')
      this._state.setUserIsLogin(false)
   }


}
