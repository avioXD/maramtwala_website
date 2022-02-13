import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegisterModel } from '../model/user.model';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { StateService } from './state.service';
import { map } from 'rxjs';
import { UserState } from '../store/user/user.state';
import { UserProfileState } from '../pages/profile/profile.component';

const base_url = environment.apiKey
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
         this._state.setProfileImage(res.data.user.profile_pic)
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
         this._state.setProfileImage(res.data.user.profile_pic)
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
      else{
         this._state.setUserIsLogin(false)
         this._state.setToken('')
         this._state.setIsNewUser(true)
    }
   }
   _isLoggedIn(){
      this.syncUserInApp()
      let isres = false
       this._state.getUserIsLogin().subscribe(res=> {
         isres= res
           console.log(res)}).unsubscribe()
           return isres

   }
   logOutUser(){
      this._state.setToken('')
      this._state.setUserIsLogin(false)
   }
   _updateUser_Api(user: UserProfileState){
         return this._http.patch(base_url+'/api/v1/user/'+user._id, user).pipe(map((res: any)=>{
            console.log(res)
             if(res.status == 'success'){
                this._state.setToken(res.token)
                this._state.setUserIsLogin(true)
                this._state.setProfileImage(res.data.user.profile_pic)
                return 200
             } else return res.status
      } ))
   }


}
