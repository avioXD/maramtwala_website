import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/service/state.service';
interface UserState{
  _id: string,
  profile_pic: string,
   name:  string,
  email:  string,
   phone_no:  string,
  alternate_no:  string,
  address:  string,
  role:  string,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData:  UserState
  editableDetails: boolean = false
  constructor(private _state: StateService) { }

  ngOnInit(): void {
    this.userData =   {
      _id: '',
      profile_pic: '',
      name:  '',
      email:  '',
       phone_no:  '',
      alternate_no:  '',
      address:  '',
      role:  '',
    }
    this._state.getUserObject().subscribe(res=>{
      this.userData = {
        _id: res._id,
        profile_pic: res.profile_pic,
        name: res.first_name+' '+res.last_name,
        email: res.email,
        phone_no: res.phone_no,
        alternate_no: res.alternate_no,
        address: res.address,
        role: res.role
      }
    }).unsubscribe()
  }

}
