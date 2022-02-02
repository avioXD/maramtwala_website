import { Component,   EventEmitter,   OnInit, Output } from '@angular/core';
import { UserRegisterModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { StateService } from 'src/app/service/state.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
@Output() registerEvent = new EventEmitter<any>()
  
  page: number = 1
  verified_number : string = ""
  constructor( private _state: StateService, private _auth: AuthService) { }
  registeredData : UserRegisterModel
  showSaveBtn: boolean = false
  ngOnInit(): void {
    this.verified_number = this.verified_number
  }
  nextPage(): void{
    this.page++;
  }
  prevPage(): void{
    this.page--;
  }
  afterNumberVerify(event){
    if(event.phone){
      this.verified_number = event.number
      this.nextPage()
    }
  }
  afterRecivedFromData(event){
      this.registeredData = event
      this.showSaveBtn = true
   }
   onSave(){
      this._auth._registerUser(this.registeredData).subscribe(res=>{
        this._state.setLoginToSignUp(true)
        this._state.setUserIsLogin(true)
        this._state.setSwitch_signuplogin(false)
      },(err)=>{
        
      })
   }
   
  
  
}
