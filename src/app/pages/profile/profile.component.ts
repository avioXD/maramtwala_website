import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/service/state.service';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import {NgxImageCompressService} from "ngx-image-compress";
export interface UserProfileState{
  _id: string,
  profile_pic: string,
  first_name:  string,
  last_name: string,
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
  userData:  UserProfileState
  editableDetails: boolean = false
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imcrp: boolean = false
  isLoading: boolean = false
  constructor(private _state: StateService, private _auth:AuthService, private toast: ToastrService, private imageCompress: NgxImageCompressService) { }

  ngOnInit(): void {
    this.userData =   {
      _id: '',
      profile_pic: '',
      first_name:  '',
      last_name : "",
      email:  '',
      phone_no:  '',
      alternate_no:  '',
      address:  '',
      role:  '',
    }
    this._state.getUserIsLogin().subscribe(res=>{
      let isLogin = res
      if(isLogin){
        this._state.getUserObject().subscribe(res=>{
          this.userData = res
        })
      }
    })
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.imcrp = true
  }
imageCropped(event: ImageCroppedEvent) {
  this.editableDetails = true
  this.userData.profile_pic =  event.base64;
   
}
imageLoaded(image: LoadedImage) {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
    this.imcrp = false
    this.croppedImage  = null
}
onCrop(){
  this.imcrp = false
}
onUpdate(){
  this.isLoading = true
  this.imageCompress
  .compressFile(this.userData.profile_pic,  30, 30) // 50% ratio, 50% quality
  .then(
    (compressedImage) => {
      this.userData.profile_pic = compressedImage;
      this._auth._updateUser_Api(this.userData).subscribe((res: any )=>{
        res.token? this._state.setToken(res.token): ''
       console.log("Data",res)
       window.location.reload();
       this._state.getUserIsLogin().subscribe(res=>{
        let isLogin = res
        if(isLogin){
          this._state.getUserObject().subscribe(res=>{
            this.userData = res
          })
        }
      })
       
      // this.userData = res.data.doc
       this.isLoading =false
       this.editableDetails = !this.editableDetails 
     },(err=>{
       this.toast.error('File too large')
       console.log(err)
     }))
    }
  );
  
}

}
