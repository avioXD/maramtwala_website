import { Component,   EventEmitter,   OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getRegisterState } from 'src/app/store/Shared/shared.selector';
import { setRegitrationStepsAction } from 'src/app/store/Shared/shared.action';
import { UserRegisterModel } from 'src/app/model/UserModel';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
@Output() registerEvent = new EventEmitter<any>()
  
  steps: number = 1
  verified_number : string = ""
  constructor(private route: Router, private store: Store<AppState> , private _auth: AuthService) { }
  registeredData : UserRegisterModel
  showSave: boolean = false
  ngOnInit(): void {
     this.store.select(getRegisterState).subscribe((v)=>{
       this.steps = v
     })
  }
  nextPage(): void{
    this.steps++;
    this.store.dispatch(setRegitrationStepsAction({step: this.steps}))
  }
  prevPage(): void{
    this.steps--;
    this.store.dispatch(setRegitrationStepsAction({step: this.steps}))
  }
  onVerifyOtp(event){
    if(event.number){
      this.verified_number = event.number
      this.nextPage()
    }
  }
   onEmmit(event){
    
      this.registeredData = event
      this.showSave = true
   }
   onSave(){
     console.log(this.registeredData)
    this._auth.userSignup(this.registeredData).subscribe((res:any)=>{
      let response = res  
      this.registerEvent.emit(response)
    },(err)=>{
        console.log(err)
    })
   }
   
  
  
}
