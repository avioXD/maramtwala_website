import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

   }

   sendOTP(usernumber: number){
   // console.log(usernumber)
    if(isDevMode()){
      return null
    }else{
      let data={
        clientNumber: `+91${usernumber}`
       }
        return this.http.post('https://mwala.herokuapp.com/test/otp',
        data)
    }
   }
}
